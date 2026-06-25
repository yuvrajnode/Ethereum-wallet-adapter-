import { useMemo, useState } from 'react'
import {
  useAccount,
  useBalance,
  useChainId,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from 'wagmi'
import { parseEther, isAddress } from 'viem'
import { explorerUrl, shortenAddress } from '../utils.js'

// Form to send native ETH with client-side validation and receipt tracking.
export default function SendEth() {
  const { address } = useAccount()
  const chainId = useChainId()
  const { data: balance } = useBalance({ address })
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')

  const {
    data: hash,
    sendTransaction,
    isPending,
    error: sendError,
    reset,
  } = useSendTransaction()

  const { isLoading: confirming, isSuccess: confirmed } =
    useWaitForTransactionReceipt({ hash })

  const validation = useMemo(() => {
    if (!to && !amount) return null
    if (to && !isAddress(to)) return 'Enter a valid recipient address.'
    if (to.toLowerCase() === address?.toLowerCase())
      return "You can't send ETH to yourself."
    if (amount) {
      const num = Number(amount)
      if (!Number.isFinite(num) || num <= 0) return 'Enter an amount greater than 0.'
      if (balance && num > Number(balance.formatted))
        return 'Amount exceeds your balance.'
    }
    return null
  }, [to, amount, address, balance])

  const ready = isAddress(to) && Number(amount) > 0 && !validation && !isPending

  function onSubmit(e) {
    e.preventDefault()
    if (!ready) return
    sendTransaction({ to, value: parseEther(amount) })
  }

  function setMax() {
    if (balance) setAmount(balance.formatted)
  }

  function resetForm() {
    setTo('')
    setAmount('')
    reset()
  }

  return (
    <div className="card">
      <div className="card-head">
        <h2>Send ETH</h2>
        <span className="balance-mini">
          Balance: {balance ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol}` : '—'}
        </span>
      </div>

      <form onSubmit={onSubmit} className="send-form">
        <label className="field">
          <span className="field-label">Recipient address</span>
          <input
            className="input"
            placeholder="0x…"
            value={to}
            spellCheck={false}
            autoComplete="off"
            onChange={(e) => setTo(e.target.value.trim())}
          />
        </label>

        <label className="field">
          <span className="field-label">Amount</span>
          <div className="input-affix">
            <input
              className="input"
              type="number"
              min="0"
              step="any"
              placeholder="0.0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className="affix-symbol">{balance?.symbol || 'ETH'}</span>
            <button type="button" className="affix-max" onClick={setMax}>
              Max
            </button>
          </div>
        </label>

        {validation && <p className="form-error">{validation}</p>}
        {sendError && (
          <p className="form-error">
            {sendError.shortMessage || 'Transaction was rejected.'}
          </p>
        )}

        {hash ? (
          <div className={`tx-status ${confirmed ? 'ok' : ''}`}>
            <span>
              {confirming
                ? 'Waiting for confirmation…'
                : confirmed
                  ? 'Transaction confirmed ✓'
                  : 'Transaction submitted'}
            </span>
            <a
              href={explorerUrl(chainId, 'tx', hash)}
              target="_blank"
              rel="noreferrer"
            >
              {shortenAddress(hash, 6)} ↗
            </a>
          </div>
        ) : null}

        <div className="send-actions">
          {confirmed ? (
            <button type="button" className="btn-primary btn-block" onClick={resetForm}>
              Send another
            </button>
          ) : (
            <button type="submit" className="btn-primary btn-block" disabled={!ready}>
              {isPending
                ? 'Confirm in wallet…'
                : confirming
                  ? 'Sending…'
                  : 'Send ETH'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
