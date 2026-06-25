// Shorten an address like 0x1234...abcd for compact display.
export function shortenAddress(address, chars = 4) {
  if (!address) return ''
  return `${address.slice(0, 2 + chars)}…${address.slice(-chars)}`
}

// Trim a numeric string to a sensible number of decimals without trailing zeros.
export function formatBalance(value, decimals = 4) {
  if (value === undefined || value === null) return '0'
  const num = Number(value)
  if (!Number.isFinite(num)) return '0'
  if (num === 0) return '0'
  if (num < 0.0001) return '<0.0001'
  return num.toLocaleString('en-US', { maximumFractionDigits: decimals })
}

// Map a chain id to its block explorer base URL.
const EXPLORERS = {
  1: 'https://etherscan.io',
  8453: 'https://basescan.org',
  42161: 'https://arbiscan.io',
  10: 'https://optimistic.etherscan.io',
  137: 'https://polygonscan.com',
  11155111: 'https://sepolia.etherscan.io',
}

export function explorerUrl(chainId, type, value) {
  const base = EXPLORERS[chainId] || EXPLORERS[1]
  return `${base}/${type}/${value}`
}
