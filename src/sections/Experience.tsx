import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, Users } from 'lucide-react'

type Role = {
  company: string
  role: string
  duration: string
  level: string
  location: string
  highlights: string[]
  achievements: string[]
  isCurrent?: boolean
}

const roles: Role[] = [
  {
    company: 'UPS',
    role: 'Senior Application Development Engineer',
    duration: '2024 – Present',
    level: 'n/a',
    location: 'Parsippany, NJ',
    isCurrent: true,
    highlights: [
      'Scrum master for the claims team',
      'Led OpenShift migrations and CI/CD DevSecOps migration across services',
      'Led Claims Redesign Modernization for Claims applications from legacy to modern technology',
      'Implemented the secure payment flow for delivery fees',
    ],
    achievements: [
      'Reduced deployment time by 60% through CI/CD optimization',
      'Implemented fraud prevention and security using OTP authentication',
    ],
  },
  {
    company: 'IBM (UPS Client)',
    role: 'Senior Application Developer - Onsite Lead Coordinator',
    duration: '2021 – 2024',
    level: '7A',
    location: 'Parsippany, NJ',
    highlights: [
      'Led onsite coordination for UPS client projects',
      'Scrum master for the claims team',
      'Led Claims Redesign Modernization for Claims applications from legacy to modern technology',
      'Modernized mainframe APIs via z/OS Connect (200+ APIs)',
      'Built pipelines and observability for hybrid-cloud microservices',
      'Mentored junior developers and conducted code reviews',
    ],
    achievements: [
      'Successfully migrated 200+ mainframe APIs to zOS Connect and OpenShift Cloud',
      'Improved system UI design and performance by 40% through modern technology',
      'Led dev team of 12+ members',
    ],
  },
  {
    company: 'IBM (UPS Client)',
    role: 'Senior Application Developer',
    duration: '2019 – 2021',
    level: '6B',
    location: 'Chennai, India',
    highlights: [
      'Developed and maintained enterprise applications',
      'Modernized the customer application using modern technology .net core and angular',
      'Implemented DevOps practices and automation using Jenkins',
    ],
    achievements: [
      'Reduced manual testing time by 50% through automation',
      'Contributed to IBM Newsletter recognition for cloud migration',
    ],
  },
  {
    company: 'IBM (UPS Client)',
    role: 'Application Developer',
    duration: '2017 – 2019',
    level: '6A',
    location: 'Chennai, India',
    highlights: [
      'Developed web applications using modern frameworks .net core and angular',
      'Worked on database design and optimization',
      'Participated in agile development processes',
      'Collaborated with cross-functional teams',
    ],
    achievements: [
      'Received Rising Star award (2018)',
      'Improved customer serviceapplication response time by 30%',
    ],
  },
  {
    company: 'IBM (UPS Client)',
    role: 'Associate System Engineer',
    duration: 'Aug 2016 – 2017',
    level: 'GH',
    location: 'Chennai, India',
    highlights: [
      'Learned enterprise application development practices',
      'Worked on legacy system maintenance and updates',
      'Supported the customer application in production',
    ],
    achievements: [
      'Received Shining Star award (2017)',
      'Earned IBM Expert level 1 badge for the skill',
    ],
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <motion.p 
          className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My career journey from Associate System Engineer to Senior Application Development Engineer
        </motion.p>
        
        {/* Roadmap Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-500 hidden md:block transform -translate-x-1/2" />
          
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {roles.map((r, idx) => {
              const isHovered = hoveredIndex === idx
              const isEven = idx % 2 === 0
              return (
                <motion.div 
                  key={`${r.company}-${idx}`}
                  className="relative flex items-center justify-center"
                  variants={itemVariants}
                >
                  {/* Timeline Dot - Centered */}
                  <div className="absolute left-1/2 w-4 h-4 bg-brand-500 rounded-full border-4 border-white dark:border-slate-900 z-10 hidden md:block transform -translate-x-1/2">
                    {r.isCurrent && (
                      <motion.div
                        className="absolute inset-0 bg-brand-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  {/* Horizontal Line - Connecting Card to Timeline */}
                  <div className={`absolute top-1/2 w-12 h-0.5 bg-gradient-to-r hidden md:block transform -translate-y-1/2 ${
                    isEven 
                      ? 'right-1/2 mr-6 bg-gradient-to-l from-brand-500 to-transparent' 
                      : 'left-1/2 ml-6 bg-gradient-to-r from-brand-500 to-transparent'
                  }`} />
                  
                  {/* Content Card - Alternating Sides */}
                  <motion.div 
                    className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div 
                      className={`card p-6 cursor-pointer group transition-all duration-300 ${r.isCurrent ? 'ring-2 ring-brand-500/50 bg-brand-50/50 dark:bg-brand-900/20' : ''}`}
                      whileHover={{ 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                    >
                      {/* Company Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            r.company === 'UPS' 
                              ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}>
                            {r.company}
                          </div>
                          {r.isCurrent && (
                            <motion.span 
                              className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full font-medium"
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Current
                            </motion.span>
                          )}
                        </div>
                        <motion.div
                          animate={{ rotate: isHovered ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isHovered ? <ChevronUp size={20} className="text-brand-600" /> : <ChevronDown size={20} className="text-brand-600" />}
                        </motion.div>
                      </div>
                      
                      {/* Role Info */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold group-hover:text-brand-600 transition-colors">{r.role}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-300">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {r.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {r.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award size={14} />
                            Level {r.level}
                          </div>
                        </div>
                      </div>
                      
                      {/* Expandable Content */}
                      <AnimatePresence initial={false}>
                        {isHovered && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-4">
                              {/* Key Highlights */}
                              <div>
                                <h4 className="font-medium text-sm text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                                  <Users size={16} />
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-1">
                                  {r.highlights.map((h, index) => (
                                    <motion.li 
                                      key={h}
                                      className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0" />
                                      {h}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                              
                              {/* Achievements */}
                              <div>
                                <h4 className="font-medium text-sm text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                                  <Award size={16} />
                                  Key Achievements
                                </h4>
                                <ul className="space-y-1">
                                  {r.achievements.map((a, index) => (
                                    <motion.li 
                                      key={a}
                                      className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.2 + index * 0.05 }}
                                    >
                                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                      {a}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


