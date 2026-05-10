import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { site, company } from '../../data/index.js'

export default function Layout() {
  const location = useLocation()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { logo, nav } = site

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? 'text-accent' : 'text-primary hover:text-accent'
    }`

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold tracking-wider text-primary">
          {logo.text}<span className="text-accent">{logo.accent}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-primary"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-primary"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-primary"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 bg-surface z-40 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 pt-16">
              {nav.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={linkClass}
                    end={link.path === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const { footer, nav } = site

  return (
    <footer className="bg-primary text-surface/80 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold text-surface mb-3">
              {site.logo.text}<span className="text-accent">{site.logo.accent}</span>
            </h3>
            <p className="text-sm leading-relaxed text-surface/60">
              {footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-surface mb-4">{footer.quickLinks}</h4>
            <div className="flex flex-col gap-2">
              {nav.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-surface/60 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-surface mb-4">{footer.contactTitle}</h4>
            <div className="text-sm text-surface/60 space-y-1">
              <p>{site.contact.labels.phone}：{company.contact.phone}</p>
              <p>{site.contact.labels.email}：{company.contact.email}</p>
              <p>{site.contact.labels.address}：{company.contact.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-surface/20 text-center text-xs text-surface/40">
          &copy; {new Date().getFullYear()} {company.name}. {footer.copyright}
        </div>
      </div>
    </footer>
  )
}
