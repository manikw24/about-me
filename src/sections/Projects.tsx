import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Multi-Agent IT Support System',
    description: 'Advanced multi-agent platform that routes complex IT incidents to specialized AI agents for diagnostics, automation, and documentation with human-in-the-loop controls.',
    stack: ['Multi-Agent', 'GPT-4', 'LangGraph', 'DSPy', 'MCP', 'FastAPI'],
    github: 'https://github.com',
  },
  {
    title: 'AI Agent for Order Management',
    description: 'Autonomous workflows using LangChain/LangGraph and LLMs for order orchestration.',
    stack: ['LangChain', 'LangGraph', 'LLMs'],
    link: 'https://github.com',
    github: 'https://github.com',
  },
  {
    title: 'UPS Packaging Box ML Model',
    description: 'Watson Visual Recognition model with voice-enabled UI to classify packaging boxes.',
    stack: ['Watson VR', 'Python', 'Voice'],
    github: 'https://github.com',
  },
  {
    title: 'Virtual Assistant',
    description: 'Conversational assistant built with Google Dialogflow and voice control.',
    stack: ['Dialogflow', 'Node.js', 'Voice'],
    github: 'https://github.com',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Public Projects
        </motion.h2>
        <motion.div 
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              className="card p-4 flex flex-col group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="h-28 rounded-lg bg-gradient-to-tr from-brand-600/20 to-fuchsia-500/20 mb-3 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.link ? <ExternalLink size={16} className="text-white" /> : <Github size={16} className="text-white" />}
                </div>
              </motion.div>
              <h3 className="font-medium group-hover:text-brand-600 transition-colors">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 flex-grow">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <motion.span 
                    key={s} 
                    className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm text-brand-600 hover:text-brand-700 flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm text-slate-600 hover:text-brand-600 flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-600 to-fuchsia-500 text-white rounded-lg font-semibold hover:from-brand-700 hover:to-fuchsia-600 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


