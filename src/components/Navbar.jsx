import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const linkBase = 'text-sm font-medium transition-colors'
const linkActive = 'text-accent'
const linkIdle = 'text-brand-800 hover:text-accent'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200/70 bg-brand-50/95 backdrop-blur">
      <div className="container-page">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/photo/logo.jpeg"
              alt="Atrovia Architecture logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-brand-200"
            />
            <div className="leading-tight">
              <p className="font-serif text-lg font-semibold text-brand-900">Atrovia</p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-600">Architecture</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary py-2.5">
              Get in Touch
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-800 hover:bg-brand-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-brand-200 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? 'bg-brand-100 text-accent' : 'text-brand-800 hover:bg-brand-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-1 w-full">
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
