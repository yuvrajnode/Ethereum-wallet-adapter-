// Marketing-style hero shown when no wallet is connected.
const FEATURES = [
  {
    icon: '🔗',
    title: 'One-click connect',
    text: 'Connect MetaMask, Coinbase Wallet, or any injected browser wallet instantly.',
  },
  {
    icon: '🌐',
    title: 'Multi-chain',
    text: 'Switch between Ethereum, Base, Arbitrum, Optimism, Polygon and Sepolia.',
  },
  {
    icon: '💸',
    title: 'Send & receive',
    text: 'Transfer ETH with live validation and track confirmations on-chain.',
  },
  {
    icon: '🔒',
    title: 'Non-custodial',
    text: 'Keys never leave your wallet. Nothing is stored on our servers.',
  },
]

export default function Landing({ onConnect }) {
  return (
    <section className="landing">
      <div className="hero">
        <span className="hero-badge">Web3 · wagmi · viem</span>
        <h1 className="hero-title">
          Your gateway to the <span className="grad-text">Ethereum</span> network
        </h1>
        <p className="hero-sub">
          Connect a wallet to view balances across six networks, send ETH, and
          track transactions — all from one clean, secure dashboard.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-lg" onClick={onConnect}>
            Connect Wallet
          </button>
          <a
            className="btn-ghost btn-lg"
            href="https://ethereum.org"
            target="_blank"
            rel="noreferrer"
          >
            Learn more ↗
          </a>
        </div>
      </div>

      <div className="feature-grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <span className="feature-icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
