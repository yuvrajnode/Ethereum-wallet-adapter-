import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import { shortenAddress } from '../utils.js'

// Top navigation bar with the brand mark and the connect / account control.
export default function Header({ onConnect }) {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  return (
    <header className="app-header">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 256 417" fill="none">
            <path fill="#fff" d="M127.96 0 125.2 9.36v275.97l2.76 2.75 127.94-75.64z" />
            <path fill="#cdd6f4" d="M127.96 0 0 212.44l127.96 75.64V154.16z" />
            <path fill="#fff" d="m127.96 312.19-1.55 1.89v98.31l1.55 4.53L256 236.59z" />
            <path fill="#cdd6f4" d="M127.96 416.92v-104.73L0 236.59z" />
            <path fill="#b4befe" d="m127.96 288.08 127.94-75.64-127.94-58.28z" />
            <path fill="#8b9cf6" d="m0 212.44 127.96 75.64V154.16z" />
          </svg>
        </span>
        <span className="brand-name">
          ETH<span className="brand-accent"> Wallet</span>
        </span>
      </div>

      {isConnected ? (
        <div className="header-account">
          <span className="account-chip">
            <span className="dot" aria-hidden="true" />
            {ensName || shortenAddress(address)}
          </span>
          <button className="btn-ghost" onClick={() => disconnect()}>
            Disconnect
          </button>
        </div>
      ) : (
        <button className="btn-primary" onClick={onConnect}>
          Connect Wallet
        </button>
      )}
    </header>
  )
}
