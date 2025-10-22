import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from '../theme/ThemeProvider'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map(l => l.href.slice(1)))
  useEffect(() => {
    setOpen(false)
  }, [active])
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80">
      <div className="container flex items-center justify-between py-4">
        <motion.a 
          href="#hero" 
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-brand-600 to-fuchsia-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          MK
        </motion.a>

        <nav className="hidden md:flex gap-8">
          {links.map(l => (
            <motion.a 
              key={l.href} 
              href={l.href} 
              className={`text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                active === l.href.slice(1) 
                  ? 'text-brand-600 bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button 
            aria-label="Toggle theme" 
            onClick={toggle} 
            className="h-10 w-10 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-600 dark:text-slate-300" />}
            </motion.div>
          </motion.button>
          <motion.button 
            className="md:hidden h-10 w-10 p-0 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white/90 dark:bg-slate-800/90 backdrop-blur hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center" 
            onClick={() => setOpen(o => !o)} 
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={20} className="text-slate-700 dark:text-slate-300" />
          </motion.button>
        </div>
      </div>
      {open && (
        <motion.div 
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container py-4 grid gap-3">
            {links.map(l => (
              <motion.a 
                key={l.href} 
                href={l.href} 
                className={`text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                  active === l.href.slice(1) 
                    ? 'text-brand-600 bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {l.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}


