import { motion } from 'framer-motion'
import { Code, Cloud, Brain, Shield, Database, Server } from 'lucide-react'

type Group = { 
  name: string
  items: string[]
  icon: React.ReactNode
  color: string
}

const groups: Group[] = [
  { 
    name: 'Programming', 
    items: ['Python', '.NET Core', 'Java', 'C#', 'React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    icon: <Code size={20} />,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Database', 
    items: ['DB2', 'Firestore','Couchbase', 'SQL', 'MongoDB', 'MySQL'],
    icon: <Database size={20} />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    name: 'Cloud & DevSecOps', 
    items: ['Azure', 'GCP', 'OpenShift', 'BigQuery', 'Docker', 'Jfrog','Kubernetes', 'ArgoCD', 'MLflow'],
    icon: <Cloud size={20} />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    name: 'AI/ML and Data Science', 
    items: ['Pandas', 'NumPy', 'Seaborn', 'LangChain', 'PyTorch', 'Keras', 'Agentic AI', 'Tableau', 'Scikit-learn', 'TensorFlow', 'BeautifulSoup', 'NLTK', 'spaCy', 'Matplotlib'],
    icon: <Brain size={20} />,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'Mainframe Skills', 
    items: ['COBOL', 'CICS', 'JCL', 'VSAM', 'DB2', 'z/OS Connect'],
    icon: <Server size={20} />,
    color: 'from-orange-500 to-red-500'
  },
  { 
    name: 'Monitoring & Security', 
    items: ['Grafana', 'Azure Monitor', 'Log Insights','Istio', 'Kiali'],
    icon: <Shield size={20} />,
    color: 'from-orange-500 to-red-500'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="mt-6 grid gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {groups.map((g, groupIndex) => (
            <motion.div 
              key={g.name} 
              className="card p-6 group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`p-3 rounded-lg bg-gradient-to-r ${g.color} text-white`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {g.icon}
                </motion.div>
                <h3 className="text-lg font-semibold group-hover:text-brand-600 transition-colors">{g.name}</h3>
              </div>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2 + groupIndex * 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {g.items.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className="text-sm px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 hover:text-brand-600 transition-colors cursor-pointer"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


