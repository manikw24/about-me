import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Certifications } from './sections/Certifications'
import { Skills } from './sections/Skills'
import { Achievements } from './sections/Achievements'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { SocialBar } from './components/SocialBar'
import { BackToTop } from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <SocialBar />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App


