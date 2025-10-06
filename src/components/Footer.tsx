export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
      <div className="container text-sm text-slate-500 flex flex-col md:flex-row gap-3 items-center justify-between">
        <p>© {new Date().getFullYear()} Manikanta Kottapalli</p>
        <p>Built with React, Vite, Tailwind, and Framer Motion</p>
      </div>
    </footer>
  )
}


