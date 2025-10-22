import { motion } from 'framer-motion'
import { Award, Calendar, Building, ExternalLink, Eye, FileText, Wallet } from 'lucide-react'

type Cert = { 
  title: string
  issuer?: string
  year?: string
  image?: string
  link?: string
  credentialId?: string
}

type CertCategory = {
  title: string
  description: string
  certificates: Cert[]
}

const certCategories: CertCategory[] = [
  {
    title: "Cloud & DevOps",
    description: "Cloud platforms, containerization, and DevOps practices",
    certificates: [
      { 
        title: 'Microsoft Certified: Azure Fundamentals', 
        issuer: 'Microsoft', 
        year: '2021',
        image: '/about-me/certificates/microsoft-certified-azure-fundamentals.jpg',
        link: 'https://www.credly.com/badges/50e9393c-1a51-4d67-b816-b4d8c7203dd3/public_url',
        credentialId: 'AZ-900'
      },
      { 
        title: 'Getting Started with Microservices with Istio and IBM Cloud Kubernetes Service', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/getting-started-with-microservices-with-istio-and-i.png',
        link: 'https://www.credly.com/badges/ca2100fb-88d2-4f43-b2ae-455b01595c62/public_url'
      },
      { 
        title: 'IBM Cloud Kubernetes Service', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/ibm-cloud-kubernetes-service.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
      { 
        title: 'Docker Essentials - A Developer Introduction', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/docker-essentials-a-developer-introduction.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      }
    ]
  },
  {
    title: "Data Science, Machine Learning & AI",
    description: "Data analysis, machine learning, and AI technologies",
    certificates: [
      { 
        title: 'Python Data Science', 
        issuer: 'Simplilearn', 
        year: '2019',
        image: '/about-me/certificates/python-data-science.jpg',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'Data Science Capstone', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Data Science Capstone.png',
        link: 'https://www.coursera.org/account/accomplishments/example'
      },
      { 
        title: 'Data Science with Python', 
        issuer: 'Simplilearn', 
        year: '2020',
        image: '/about-me/certificates/Data Science with Python.png',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'Data Science with R', 
        issuer: 'Simplilearn', 
        year: '2020',
        image: '/about-me/certificates/Data Science with R.png',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'Data Science with SAS Training', 
        issuer: 'Simplilearn', 
        year: '2020',
        image: '/about-me/certificates/Data Science with SAS Training.png',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'Machine Learning Advanced Certification Training', 
        issuer: 'Simplilearn', 
        year: '2020',
        image: '/about-me/certificates/Machine Learning Advanced Certification Training.png',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'Big Data Hadoop and Spark Developer', 
        issuer: 'Simplilearn', 
        year: '2020',
        image: '/about-me/certificates/Big Data Hadoop and Spark Developer.png',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'Tableau Desktop 10', 
        issuer: 'Simplilearn', 
        year: '2020',
        image: '/about-me/certificates/Tableau Desktop 10.png',
        link: 'https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax'
      },
      { 
        title: 'IBM Watson Machine Learning Essentials', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/ibm-watson-machine-learning-essentials.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
      { 
        title: 'IBM Watson Studio Visual Recognition Essentials', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/ibm-watson-studio-visual-recognition-essentials.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
      { 
        title: 'Watson Discovery Foundations', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/watson-discovery-foundations.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
      { 
        title: 'Watson Speech to Text', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/watson-speech-to-text.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      }
    ]
  },
  {
    title: "Mainframe & Legacy Systems",
    description: "Mainframe programming and legacy system expertise",
    certificates: [
      { 
        title: 'Mainframe Application Programmer - CICS V5.3 Programming (Experienced)', 
        issuer: 'Interskill', 
        year: '2018',
        image: '/about-me/certificates/interskill-mainframe-application-programmer-cics-v5-3-programming-experienced.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
      { 
        title: 'Mainframe Application Programmer - COBOL Programming (Expert)', 
        issuer: 'Interskill', 
        year: '2018',
        image: '/about-me/certificates/interskill-mainframe-application-programmer-cobol-programming-expert.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
      { 
        title: 'Mainframe Application Programmer - DB2 Programming (Experienced)', 
        issuer: 'Interskill', 
        year: '2018',
        image: '/about-me/certificates/interskill-mainframe-application-programmer-db2-programming-experienced.png',
        link: 'https://www.credly.com/users/kottapalli-manikanta/badges'
      },
    ]
  },
  {
    title: "Leadership & Management",
    description: "Leadership skills, design thinking, and management methodologies",
    certificates: [
      { 
        title: 'New Managment Orientation', 
        issuer: 'UPS', 
        year: '2025',
        image: '/about-me/certificates/New-Management-Orientation.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Enterprise Design Thinking Practitioner', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/enterprise-design-thinking-practitioner.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Agile Principles and Methodologies', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Agile Principles and Methodologies.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Delivering Feedback That Encourages Growth', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Delivering Feedback That Encourages Growth.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Effective Team Communication', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Effective Team Communication.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Handling Team Conflict', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Handling Team Conflict.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Leading through Problem Solving and Decision Making', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Leading through Problem Solving and Decision Making.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Moving from Me to We with Delegation', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Moving from Me to We with Delegation.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Polishing Your Feedback Skills', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Polishing Your Feedback Skills.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      },
      { 
        title: 'Technical Product Management Performance Metrics & Analytics', 
        issuer: 'IBM', 
        year: '2020',
        image: '/about-me/certificates/Technical Product Management Performance Metrics & Analytics.png',
        link: 'https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet'
      }
    ]
  },
  // {
  //   title: "Security & Industry",
  //   description: "Security practices and industry-specific knowledge",
  //   certificates: [
  //     { 
  //       title: 'Security and Privacy by Design Foundations', 
  //       issuer: 'IBM', 
  //       year: '2020',
  //       image: '/about-me/certificates/security-and-privacy-by-design-foundations.png',
  //       link: 'https://www.credly.com/badges/example'
  //     },
  //     { 
  //       title: 'Travel and Transportation Industry Jumpstart', 
  //       issuer: 'IBM', 
  //       year: '2020',
  //       image: '/about-me/certificates/travel-and-transportation-industry-jumpstart.1.png',
  //       link: 'https://www.credly.com/badges/example'
  //     }
  //   ]
  // }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
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

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Badges
        </motion.h2>
        
        <div className="mt-8 space-y-12">
          {certCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {category.description}
                </p>
              </div>
              
              <motion.div 
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {category.certificates.map((c, index) => (
            <motion.div 
              key={c.title} 
              className="card p-0 group cursor-pointer overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-100 to-fuchsia-100 dark:from-brand-900/30 dark:to-fuchsia-900/30 overflow-hidden">
                {c.image ? (
                  <img 
                    src={c.image} 
                    alt={c.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.style.display = 'none'
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                      if (nextElement) {
                        nextElement.style.display = 'flex'
                      }
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500 to-fuchsia-500" style={{ display: c.image ? 'none' : 'flex' }}>
                  <Award size={48} className="text-white" />
                </div>
                
                {/* Overlay with view button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-800/90 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Eye size={16} />
                    View Certificate
                  </motion.div>
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm group-hover:text-brand-600 transition-colors line-clamp-2">{c.title}</h3>
                  {c.credentialId && (
                    <span className="text-xs px-2 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-full ml-2 flex-shrink-0">
                      {c.credentialId}
                    </span>
                  )}
                </div>
                
                {(c.issuer || c.year) && (
                  <div className="space-y-1 mb-3">
                    {c.issuer && (
                      <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                        <Building size={12} />
                        {c.issuer}
                      </div>
                    )}
                    {c.year && (
                      <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
                        <Calendar size={12} />
                        {c.year}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {c.link && (
                    <motion.a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-brand-600 text-white text-xs rounded-lg hover:bg-brand-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      Verify
                    </motion.a>
                  )}
                  {c.image && (
                    <motion.button
                      className="px-3 py-2 border border-slate-300 dark:border-slate-700 text-xs rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        // Open image in new tab
                        window.open(c.image, '_blank')
                      }}
                    >
                      <Eye size={12} />
                    </motion.button>
                  )}
                </div>
              </div>
                </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Buttons */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://www.credly.com/users/kottapalli-manikanta/badges"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Award size={18} />
              View More on Credly
            </motion.a>
            
            <motion.a
              href="https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              View More on Simplilearn
            </motion.a>
            
            <motion.a
              href="https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet size={18} />
              View More on Skillsoft
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


