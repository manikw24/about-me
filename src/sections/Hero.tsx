import { motion, useScroll, useTransform } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { Github, Linkedin, Mail, ChevronDown, MapPin, Calendar, Award, Users, FileText, Wallet } from 'lucide-react'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 60])
  const typed = useTypewriter([
    'Senior Application Development Engineer',
    'Application Modernization Expert',
    'Cloud & AI/ML Enthusiast',
    'Certified Data Scientist',
  ], 35, 1000)
  
  return (
    <section id="hero" className="section min-h-[100vh] flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-brand-500/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-fuchsia-500/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/10 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container grid items-center gap-8 md:grid-cols-2 relative z-10">
        <div>
              {/* Company Tags */}
              <motion.div
                className="flex gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <motion.a
                  href="https://www.ups.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  UPS
                </motion.a>
                <motion.a
                  href="https://www.ibm.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Former IBM
                </motion.a>
              </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Manikanta Kottapalli
          </motion.h1>
          
          <motion.p
            className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 h-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {typed}
            <span className="animate-pulse text-brand-500">|</span>
          </motion.p>
          
          <motion.p
            className="mt-6 text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            "Building scalable cloud-native solutions, modernizing enterprise apps, Azure DevSecOps, OpenShift ServiceMesh Migration, large scale initiatives and driving AI-powered innovation."
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="mt-8 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="text-center p-3 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
            >
              <div className="text-2xl font-bold text-brand-600">9+</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Years Experience</div>
            </motion.div>
            <motion.div
              className="text-center p-3 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
            >
              <div className="text-2xl font-bold text-brand-600">300+</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Legacy Modules Migrated</div>
            </motion.div>
            <motion.div
              className="text-center p-3 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
            >
              <div className="text-2xl font-bold text-brand-600">200+</div>
              <div className="text-xs text-slate-600 dark:text-slate-300">Initiatives delivered</div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a 
              className="btn btn-primary flex items-center gap-2 px-6 py-3 text-base font-semibold"
              href="/about-me/resume.pdf" 
              download
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Award size={18} />
              Download Resume
            </motion.a>
            <motion.a 
              className="btn btn-outline flex items-center gap-2 px-6 py-3 text-base font-semibold"
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Contact Me
            </motion.a>
          </motion.div>
          
              {/* Social Links */}
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.a
                  href="https://github.com/manikw24"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/manikanta-kottapalli-13946911b/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://www.credly.com/users/kottapalli-manikanta/badges"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title="Credly Badges"
                >
                  <Award size={24} />
                </motion.a>
                <motion.a
                  href="https://success.simplilearn.com/5b01a24e-1217-47f1-959b-9da77c37bb90#gs.5fkqax"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title="Simplilearn Certificates"
                >
                  <FileText size={24} />
                </motion.a>
                <motion.a
                  href="https://skillsoft.digitalbadges.skillsoft.com/profile/manikantakottapalli950568/wallet"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title="Leadership Training Wallet"
                >
                  <Wallet size={24} />
                </motion.a>
                <motion.a
                  href="mailto:manikw24@gmail.com"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-300 hover:text-brand-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
        </div>
        
        {/* Enhanced Profile Picture */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          style={{ y }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <MapPin size={16} />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -360, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Calendar size={16} />
            </motion.div>

            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-brand-600/10 to-fuchsia-500/10 dark:from-brand-600/15 dark:to-fuchsia-500/15 p-0.5"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="/about-me/profile-picture.jpg" 
                      alt="Manikanta Kottapalli" 
                      className="w-full h-full object-contain rounded-full p-0.5"
                    />
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-brand-500/20"
                  animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-fuchsia-500/20"
                  animate={{ scale: [1, 1.01, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            {/* Status Indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer md:block hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => {
          const aboutSection = document.getElementById('about')
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <motion.div
          className="px-6 py-3 bg-white/10 dark:bg-slate-800/30 backdrop-blur rounded-full border border-white/20 dark:border-slate-700/50 hover:bg-white/20 dark:hover:bg-slate-800/50 transition-colors"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(99, 102, 241, 0.4)",
              "0 0 0 10px rgba(99, 102, 241, 0.1)",
              "0 0 0 0 rgba(99, 102, 241, 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="text-base font-semibold text-white dark:text-slate-200"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
        </motion.div>
        <motion.div
          className="p-3 bg-brand-500/20 dark:bg-brand-500/30 rounded-full hover:bg-brand-500/30 dark:hover:bg-brand-500/40 transition-colors"
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={32} className="text-brand-500 dark:text-brand-400" />
        </motion.div>
        
        {/* Progress Dots */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-brand-500/50"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 right-4 md:hidden flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => {
          const aboutSection = document.getElementById('about')
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <motion.div
          className="p-2 bg-brand-500/20 dark:bg-brand-500/30 rounded-full hover:bg-brand-500/30 dark:hover:bg-brand-500/40 transition-colors"
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={24} className="text-brand-500 dark:text-brand-400" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}


