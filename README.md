# Ethereum Wallet Adapter

A modern, sleek React application for connecting to Ethereum wallets using wagmi and Viem. Built with Vite for fast development and optimal performance.

![Ethereum Wallet Adapter](https://img.shields.io/badge/Ethereum-Wallet-blue?style=for-the-badge&logo=ethereum)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)

## Deployment Link

https://ethereum-wallet-adapter-indol.vercel.app

## Features

- **Modern UI**: Beautiful glassmorphism design with gradient accents
- **Wallet Connection**: Seamless integration with MetaMask and other injected wallets
- **Address Display**: Shows connected wallet address with elegant styling
- **Fast & Lightweight**: Built with Vite for lightning-fast development
- **Type-Safe**: Powered by wagmi and Viem for robust Web3 interactions

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

1. Open the application in your browser (default: http://localhost:5173)
2. Click "Connect [Wallet Name]" to connect your Web3 wallet
3. Your wallet address will be displayed once connected
4. The Send ETH feature is coming soon!

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
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── config.js        # wagmi configuration
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## Architecture

The application uses a modular architecture:

- **config.js**: Contains wagmi configuration for Ethereum mainnet
- **App.jsx**: Main component with wallet connection and address display
- **WalletConnector**: Handles wallet connection UI and logic
- **MyAddress**: Displays the connected wallet address
- **EthSend**: Placeholder for future ETH transfer functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- [wagmi](https://wagmi.sh) - React Hooks for Ethereum
- [Viem](https://viem.sh) - TypeScript interface for Ethereum
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling

