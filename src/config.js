import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, base, arbitrum, optimism, polygon } from 'wagmi/chains'
import { injected, coinbaseWallet } from 'wagmi/connectors'

// Chains the app can connect to. Mainnet first so it's the default.
export const chains = [mainnet, base, arbitrum, optimism, polygon, sepolia]

export const config = createConfig({
  chains,
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'Ethereum Wallet Adapter' }),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [sepolia.id]: http(),
  },
})
