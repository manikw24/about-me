import { motion } from 'framer-motion'
import { 
  Brain,
  Cloud,
  Code,
  Database,
  Shield,
  Activity,
  Boxes,
  Triangle,
  Server,
  FileCode,
  Workflow,
  Cog,
  HardDrive,
  ShieldCheck
} from 'lucide-react'

const skills = [
  { name: '.Net Core', icon: <Code size={18} /> },
  { name: 'Python', icon: <Brain size={18} /> },
  { name: 'Angular', icon: <Triangle size={18} /> },
  { name: 'Azure DevSecOps', icon: <ShieldCheck size={18} /> },
  { name: 'OpenShift', icon: <Cloud size={18} /> },
  { name: '.Z/OS Connect', icon: <Server size={18} /> },
  { name: 'Kubernetes', icon: <Boxes size={18} /> },
  { name: 'MLflow', icon: <Activity size={18} /> },
  { name: 'SQL', icon: <Database size={18} /> },
  { name: 'Couchbase', icon: <Database size={18} /> },
  { name: 'DB2', icon: <Database size={18} /> },
  { name: 'COBOL', icon: <FileCode size={18} /> },
  { name: 'CICS', icon: <Workflow size={18} /> },
  { name: 'JCL', icon: <Cog size={18} /> },
  { name: 'VSAM', icon: <HardDrive size={18} /> },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
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

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
          <motion.p 
            className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Results-driven Seinor Application Development Engineer, Technical Lead, Onsite Coordinator, and Scrum Master with 9+ years of experience in full systems lifecycle management, from analysis and design through deployment and maintenance. Proven expertise in leading multiple concurrent development projects, with specialized focus on modernizing mainframe and architecting microservices solutions on OpenShift Cloud platform and Google Cloud Platform (GCP). Expert in implementing enterprise-scale DevSecOps solutions with proven track record of delivering CI/CD pipelines for microservices built with Angular, .NET Core, Python, Mainframe and z/OS Connect EE and OpenShift ServiceMesh Migration.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((s, index) => (
            <motion.div 
              key={s.name} 
              className="card px-3 py-2 flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="group-hover:text-brand-600 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {s.icon}
              </motion.span>
              <span className="text-sm group-hover:text-brand-600 transition-colors">{s.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


