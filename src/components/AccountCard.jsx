import { useState } from 'react'
import {
  useAccount,
  useBalance,
  useEnsName,
  useChainId,
  useSwitchChain,
} from 'wagmi'
import { chains } from '../config.js'
import { shortenAddress, formatBalance, explorerUrl } from '../utils.js'

// Overview card: identity, native balance, and network switcher.
export default function AccountCard() {
  const { address } = useAccount()
  const chainId = useChainId()
  const { data: ensName } = useEnsName({ address })
  const { data: balance, isLoading: balanceLoading } = useBalance({ address })
  const { switchChain, isPending: switching } = useSwitchChain()
  const [copied, setCopied] = useState(false)

  const activeChain = chains.find((c) => c.id === chainId)

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="card account-card">
      <div className="account-top">
        <div className="avatar" aria-hidden="true">
          {(ensName || address || '0x').slice(2, 4).toUpperCase()}
        </div>
        <div className="account-id">
          <span className="account-name">{ensName || 'Wallet'}</span>
          <button className="address-copy" onClick={copyAddress} title="Copy address">
            <code>{shortenAddress(address, 6)}</code>
            <span className="copy-hint">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <a
          className="btn-ghost btn-sm"
          href={explorerUrl(chainId, 'address', address)}
          target="_blank"
          rel="noreferrer"
        >
          View ↗
        </a>
      </div>

      <div className="balance-block">
        <span className="balance-label">Balance</span>
        <span className="balance-value">
          {balanceLoading ? (
            <span className="skeleton" style={{ width: 140 }} />
          ) : (
            <>
              {formatBalance(balance?.formatted)}{' '}
              <span className="balance-symbol">{balance?.symbol || 'ETH'}</span>
            </>
          )}
        </span>
      </div>

      <div className="network-block">
        <span className="balance-label">Network</span>
        <div className="network-switcher">
          {chains.map((c) => (
            <button
              key={c.id}
              className={`network-pill ${c.id === chainId ? 'active' : ''}`}
              disabled={switching || c.id === chainId}
              onClick={() => switchChain({ chainId: c.id })}
            >
              {c.name}
            </button>
          ))}
        </div>
        {activeChain?.testnet && (
          <p className="testnet-note">You're on a test network — funds aren't real.</p>
        )}
      </div>
    </div>
  )
}
