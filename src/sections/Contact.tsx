import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export function Contact() {
  const [status, setStatus] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Thanks! Your message has been captured locally.')
  }

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" },
    unfocused: { scale: 1, boxShadow: "0 0 0 0px rgba(99, 102, 241, 0)" }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.form 
            onSubmit={onSubmit} 
            className="card p-6 grid gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.input 
              required 
              name="name" 
              placeholder="Name" 
              className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 focus:outline-none focus:border-brand-500 transition-colors"
              variants={inputVariants}
              animate={focused === 'name' ? 'focused' : 'unfocused'}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
            />
            <motion.input 
              required 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 focus:outline-none focus:border-brand-500 transition-colors"
              variants={inputVariants}
              animate={focused === 'email' ? 'focused' : 'unfocused'}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
            />
            <motion.textarea 
              required 
              name="message" 
              placeholder="Message" 
              rows={4} 
              className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 focus:outline-none focus:border-brand-500 transition-colors resize-none"
              variants={inputVariants}
              animate={focused === 'message' ? 'focused' : 'unfocused'}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
            />
            <motion.button 
              className="btn btn-primary flex items-center justify-center gap-2" 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} />
              Send Message
            </motion.button>
            {status && (
              <motion.p 
                className="text-sm text-brand-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
          <motion.div 
            className="card p-6 grid gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <motion.a 
              href="mailto:manikw24@gmail.com" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} className="text-brand-600 group-hover:scale-110 transition-transform" />
              <span>manikw24@gmail.com</span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/manikanta-kottapalli-13946911b/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin size={20} className="text-brand-600 group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
            </motion.a>
            <motion.a 
              href="https://github.com/manikw24" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={20} className="text-brand-600 group-hover:scale-110 transition-transform" />
              <span>GitHub Profile</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


