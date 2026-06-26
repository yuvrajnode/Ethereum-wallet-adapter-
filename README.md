# Ethereum Wallet Adapter

A modern, sleek React application for connecting to Ethereum wallets using wagmi and Viem. Connect a wallet, view balances across six networks, send ETH with live validation, and track transactions on-chain — all from one clean, non-custodial dashboard. Built with Vite for fast development and optimal performance.

![Ethereum Wallet Adapter](https://img.shields.io/badge/Ethereum-Wallet-blue?style=for-the-badge&logo=ethereum)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)

## Deployment Link

https://ethereum-wallet-adapter-indol.vercel.app

## Features

- **Multi-wallet connect**: A connect modal lists every available wallet (MetaMask, Coinbase Wallet, and any injected browser wallet) with per-wallet connection states and error handling.
- **Account dashboard**: View your ENS name (if any), shortened address with one-click copy, and live native balance.
- **Multi-chain**: Switch between Ethereum, Base, Arbitrum, Optimism, Polygon and Sepolia, with a testnet warning when relevant.
- **Send ETH**: Send native ETH with client-side validation (valid address, positive amount, balance check, no self-sends), a **Max** helper, and live confirmation tracking with a block-explorer link.
- **Receive**: Display your full address for the active network with copy and explorer shortcuts.
- **Landing page**: A hero + feature grid for visitors who haven't connected yet.
- **Polished UI/UX**: Glassmorphism design with gradient accents, a tabbed dashboard, skeleton loaders, modal animations, and a fully responsive mobile layout.
- **Non-custodial**: Keys never leave your wallet; nothing is stored on any server.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 7
- **Web3**: wagmi 3.x, Viem 2.x
- **State Management**: TanStack Query (React Query)
- **Linting**: ESLint with React Hooks plugin

## Prerequisites

- Node.js 18+
- A Web3 wallet (MetaMask, Coinbase Wallet, etc.)

## Installation

```bash
# Clone the repository
git clone https://github.com/yuvrajnode/Ethereum-wallet-adapter-.git

# Navigate to project directory
cd Ethereum-wallet-adapter-/Eth-wallet-adapter

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

1. Open the application in your browser (default: http://localhost:5173).
2. Click **Connect Wallet** and pick a wallet from the modal.
3. On the **Overview** tab, view your balance and switch networks.
4. Use the **Send** tab to transfer ETH and watch the transaction confirm.
5. Use the **Receive** tab to copy your address and share it.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Project Structure

```
Eth-wallet-adapter/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Brand + connect / account control
│   │   ├── Landing.jsx       # Hero + feature grid (disconnected state)
│   │   ├── ConnectModal.jsx  # Wallet selection modal
│   │   ├── Dashboard.jsx     # Tabbed connected experience
│   │   ├── AccountCard.jsx   # Balance, ENS, copy, network switcher
│   │   ├── SendEth.jsx       # Send ETH with validation + tx tracking
│   │   └── Receive.jsx       # Receive address view
│   ├── App.jsx               # App shell + providers
│   ├── App.css               # Component styles
│   ├── config.js             # wagmi multi-chain configuration
│   ├── utils.js              # Address / balance / explorer helpers
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global resets + design tokens
├── package.json
├── vite.config.js
└── README.md
```

## Architecture

The application is split into focused, single-responsibility components:

- **config.js**: wagmi configuration for all supported chains, transports and connectors.
- **utils.js**: pure helpers for shortening addresses, formatting balances and building explorer URLs.
- **App.jsx**: wraps the app in the Wagmi and React Query providers and switches between the landing page and the dashboard based on connection state.
- **Dashboard.jsx**: hosts the Overview / Send / Receive tabs.
- **AccountCard / SendEth / Receive**: the three connected views.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- [wagmi](https://wagmi.sh) - React Hooks for Ethereum
- [Viem](https://viem.sh) - TypeScript interface for Ethereum
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling
