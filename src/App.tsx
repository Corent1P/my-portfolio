import './App.css'
import { HeroSection } from './components/ui/hero-section'
import Navigation from './components/ui/navigation'
import { motion } from "motion/react"

function App() {

  return (
    <div className='w-full scroll-smooth'>
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full min-h-screen bg-white">
          <motion.div className="bg-black w-64 h-64" whileInView={{ rotate: 360, transition: { duration: 2 } }} />
        </div>
      </motion.div>
    </div>
  )
}

export default App
