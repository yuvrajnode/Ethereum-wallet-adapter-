import { WagmiProvider, useConnect, useAccount, useConnectors } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config.js'

// Create TanStack Query client
const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="wallet-container">
          <h1 className="wallet-title">Ethereum Wallet</h1>
          <p className="wallet-subtitle">Connect your wallet to get started</p>
          <WalletConnector />
          <div className="divider"></div>
          <MyAddress />
          <div className="divider"></div>
          <EthSend />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function MyAddress() {
  const { address } = useAccount()

  return (
    <div className="wallet-section">
      <span className="section-label">Your Address</span>
      <div className={`address-display ${address ? '' : 'not-connected'}`}>
        {address ? address : "Not Connected"}
      </div>
    </div>
  )
}

function WalletConnector() {

  // action hook
  const { connect } = useConnect()

  // connectors list (NEW recommended hook)
  const connectors = useConnectors()

  return (
    <div className="wallet-section">
      <span className="section-label">Connect Wallet</span>
      <div>
        {connectors.map((connector) => (
          <button
            type="button"
            className="connect-button"
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            Connect {connector.name}
          </button>
        ))}
      </div>
    </div>
  )
}

function EthSend() {
  return (
    <div className="wallet-section">
      <span className="section-label">Send ETH</span>
      <div className="eth-send-placeholder">
        Coming Soon
      </div>
    </div>
  )
}

export default App
