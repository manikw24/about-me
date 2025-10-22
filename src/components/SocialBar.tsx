import { Github, Linkedin, Mail } from 'lucide-react'

export function SocialBar() {
  return (
    <div className="fixed left-4 bottom-6 z-40 hidden md:flex flex-col items-center gap-4">
      <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-brand-600"><Github size={20} /></a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-600"><Linkedin size={20} /></a>
      <a href="mailto:manikanta@example.com" className="hover:text-brand-600"><Mail size={20} /></a>
      <div className="w-px h-16 bg-slate-300 dark:bg-slate-700" />
    </div>
  )
}


