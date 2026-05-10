import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/portfolio', label: '作品集' },
  { to: '/about', label: '关于我们' },
  { to: '/services', label: '服务项目' },
  { to: '/contact', label: '联系我们' },
]

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

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? 'text-accent' : 'text-primary hover:text-accent'
    }`

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold tracking-wider text-primary">
          PACK<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 bg-surface z-40 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 pt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    className={linkClass}
                    end={link.to === '/'}
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
  return (
    <footer className="bg-primary text-surface/80 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold text-surface mb-3">
              PACK<span className="text-accent">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-surface/60">
              专业包装设计工作室，致力于为品牌打造独具匠心的包装解决方案。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-surface mb-4">快速链接</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-surface/60 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-surface mb-4">联系我们</h4>
            <div className="text-sm text-surface/60 space-y-1">
              <p>电话：400-XXX-XXXX</p>
              <p>邮箱：3342064820@qq.com</p>
              <p>地址：中国·上海</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-surface/20 text-center text-xs text-surface/40">
          &copy; {new Date().getFullYear()} Pack Design. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
