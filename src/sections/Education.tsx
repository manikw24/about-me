import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react'

const educationData = [
  {
    title: 'B.Tech, Computer Science',
    institution: 'GIET Engineering College, India',
    year: '2012-2016',
    icon: <GraduationCap size={24} />,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.giet.edu'
  },
  {
    title: 'Intermediate Education',
    institution: 'GIET Engineering College, India',
    year: '2010-2012',
    icon: <BookOpen size={24} />,
    color: 'from-green-500 to-emerald-500',
    link: 'https://www.giet.edu'
  },
  {
    title: 'Data Science Professional Program',
    institution: 'Simplilearn (2 Years)',
    year: '2019-2021',
    icon: <Award size={24} />,
    color: 'from-purple-500 to-pink-500',
    link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
  }
]

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p 
          className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Academic journey and professional development programs
        </motion.p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="card p-6 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} text-white flex-shrink-0`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {edu.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg group-hover:text-brand-600 transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {edu.year}
                  </p>
                  {edu.link && (
                    <motion.a
                      href={edu.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-brand-600 hover:text-brand-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      View Details
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


