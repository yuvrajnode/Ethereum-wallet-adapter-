import { useState } from 'react'
import AccountCard from './AccountCard.jsx'
import SendEth from './SendEth.jsx'
import Receive from './Receive.jsx'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'send', label: 'Send' },
  { id: 'receive', label: 'Receive' },
]

// Connected experience: account overview plus send/receive tabs.
export default function Dashboard() {
  const [tab, setTab] = useState('overview')

  return (
    <section className="dashboard">
      <nav className="tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="tab-panel">
        {tab === 'overview' && <AccountCard />}
        {tab === 'send' && <SendEth />}
        {tab === 'receive' && <Receive />}
      </div>
    </section>
  )
}
