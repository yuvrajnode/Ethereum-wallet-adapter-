import { useState } from 'react'
import { useAccount, useChainId, useEnsName } from 'wagmi'
import { explorerUrl } from '../utils.js'

// Receive view: shows the full address with copy + explorer link.
export default function Receive() {
  const { address } = useAccount()
  const chainId = useChainId()
  const { data: ensName } = useEnsName({ address })
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="card">
      <div className="card-head">
        <h2>Receive</h2>
      </div>
      <p className="receive-hint">
        Share this address to receive ETH and tokens on the selected network.
        Only send assets on networks this address supports.
      </p>

      {ensName && <div className="receive-ens">{ensName}</div>}

      <div className="address-box">
        <code>{address}</code>
      </div>

      <div className="receive-actions">
        <button className="btn-primary btn-block" onClick={copy}>
          {copied ? 'Copied to clipboard ✓' : 'Copy address'}
        </button>
        <a
          className="btn-ghost btn-block"
          href={explorerUrl(chainId, 'address', address)}
          target="_blank"
          rel="noreferrer"
        >
          View on explorer ↗
        </a>
      </div>
    </div>
  )
}
