import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, Star, Medal, ChevronLeft, ChevronRight } from 'lucide-react'

type Achievement = {
  title: string
  description: string
  year: string
  icon: React.ReactNode
  color: string
}

const achievements: Achievement[] = [
  {
    title: 'IBM Newsletter Recognition',
    description: 'Featured for outstanding contribution to Hybrid Cloud Migration project',
    year: '2023',
    icon: <Award size={24} />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Diamond Medal',
    description: 'OpenShift Gamification project - Excellence in innovation and delivery',
    year: '2020',
    icon: <Medal size={24} />,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Rising Star Award',
    description: 'IBM recognition for exceptional performance and growth potential',
    year: '2018',
    icon: <Star size={24} />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Shining Star Award',
    description: 'IBM recognition for outstanding contribution in first year',
    year: '2017',
    icon: <Trophy size={24} />,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Data Science Certification',
    description: 'Completed comprehensive Data Science Master\'s Program',
    year: '2020',
    icon: <Award size={24} />,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Azure Fundamentals',
    description: 'Microsoft Azure Fundamentals certification achievement',
    year: '2021',
    icon: <Medal size={24} />,
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Mainframe Modernization',
    description: 'Led successful migration of 200+ APIs to cloud infrastructure',
    year: '2022',
    icon: <Trophy size={24} />,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Team Leadership',
    description: 'Successfully led cross-functional teams of 12+ members',
    year: '2023',
    icon: <Star size={24} />,
    color: 'from-rose-500 to-pink-500'
  },
]

export function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollRef = useRef<number | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    }
  }

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const startAutoScroll = () => {
    if (autoScrollRef.current) return
    
    autoScrollRef.current = window.setInterval(() => {
      if (scrollRef.current && isAutoScrolling) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const maxScroll = scrollWidth - clientWidth
        
        if (scrollLeft >= maxScroll - 10) {
          // Reset to beginning
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          // Continue scrolling
          scrollRef.current.scrollTo({ 
            left: scrollLeft + 1, 
            behavior: 'auto' 
          })
        }
      }
    }, 50) // Smooth auto-scroll speed
  }

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }

  // Start auto-scroll on mount
  React.useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [isAutoScrolling])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false)
    stopAutoScroll()
  }

  const handleMouseLeave = () => {
    setIsAutoScrolling(true)
    startAutoScroll()
  }

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Recognition
        </motion.h2>
        <motion.p 
          className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Recognition and awards throughout my professional journey
        </motion.p>
        
        <div className="relative">
          {/* Scroll Buttons */}
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 ${
              canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} className="text-slate-600 dark:text-slate-300" />
          </motion.button>
          
          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 ${
              canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} className="text-slate-600 dark:text-slate-300" />
          </motion.button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            onScroll={checkScrollButtons}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="card p-6 h-full group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-brand-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


