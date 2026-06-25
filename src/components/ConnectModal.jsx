import { useConnect, useConnectors } from 'wagmi'

// Modal that lists available wallet connectors and handles the connect flow.
export default function ConnectModal({ open, onClose }) {
  const connectors = useConnectors()
  const { connect, status, variables, error } = useConnect({
    mutation: { onSuccess: onClose },
  })

  if (!open) return null

  const isPending = status === 'pending'
  const pendingId = variables?.connector?.uid ?? variables?.connector?.id

  // De-duplicate connectors that report the same name (e.g. multiple injected).
  const seen = new Set()
  const unique = connectors.filter((c) => {
    if (seen.has(c.name)) return false
    seen.add(c.name)
    return true
  })

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Connect a wallet"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2>Connect a wallet</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <p className="modal-sub">Choose how you want to connect to Ethereum.</p>

        <div className="connector-list">
          {unique.map((connector) => {
            const thisPending =
              isPending && pendingId === (connector.uid ?? connector.id)
            return (
              <button
                key={connector.uid}
                className="connector-row"
                disabled={isPending}
                onClick={() => connect({ connector })}
              >
                <span className="connector-icon">
                  {connector.icon ? (
                    <img src={connector.icon} alt="" width={28} height={28} />
                  ) : (
                    connector.name.charAt(0)
                  )}
                </span>
                <span className="connector-name">{connector.name}</span>
                <span className="connector-status">
                  {thisPending ? 'Connecting…' : 'Connect'}
                </span>
              </button>
            )
          })}
        </div>

        {error && <p className="form-error">{error.shortMessage || error.message}</p>}

        <p className="modal-note">
          New to Ethereum?{' '}
          <a href="https://ethereum.org/en/wallets/" target="_blank" rel="noreferrer">
            Learn about wallets
          </a>
        </p>
      </div>
    </div>
  )
}
