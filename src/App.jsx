import { useState } from 'react'
import { WagmiProvider, useAccount } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config.js'
import './App.css'
import Header from './components/Header.jsx'
import Landing from './components/Landing.jsx'
import Dashboard from './components/Dashboard.jsx'
import ConnectModal from './components/ConnectModal.jsx'

const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Shell />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function Shell() {
  const { isConnected } = useAccount()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="app">
      <Header onConnect={() => setModalOpen(true)} />

      <main className="app-main">
        {isConnected ? (
          <Dashboard />
        ) : (
          <Landing onConnect={() => setModalOpen(true)} />
        )}
      </main>

      <footer className="app-footer">
        <span>
          Built with{' '}
          <a href="https://wagmi.sh" target="_blank" rel="noreferrer">
            wagmi
          </a>{' '}
          &amp;{' '}
          <a href="https://viem.sh" target="_blank" rel="noreferrer">
            viem
          </a>
        </span>
        <span className="footer-note">Non-custodial · Your keys, your coins</span>
      </footer>

      <ConnectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
