import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/connections', label: 'Connections' },
  { to: '/reflection', label: 'Portfolio' },
]

const RootLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="navbar__inner">
          <div className="brand">
            <span>Romanticism Studio</span>
            <span>Frankenstein Portfolio</span>
          </div>
          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="main-content">
        <div className="page">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">crafted for the learner portfolio &mdash; romanticism x frankenstein</div>
          <div className="footer__links">
            <a href="https://www.gutenberg.org/files/84/84-h/84-h.htm" target="_blank" rel="noreferrer">
              Frankenstein (Public Domain Text)
            </a>
            <a href="https://plato.stanford.edu/entries/romanticism/" target="_blank" rel="noreferrer">
              Stanford Encyclopedia of Philosophy: Romanticism
            </a>
            <a href="https://www.bl.uk/romantics-and-victorians" target="_blank" rel="noreferrer">
              Creative Process Notes
            </a>
          </div>
          <small>Designed to echo the clean storytelling of Apple&rsquo;s product reveals while celebrating Romantic ideals.</small>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout
