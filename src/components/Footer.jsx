import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-off-white/60 font-sans text-sm">
            Copyright {currentYear} Aaditya Voruganti
          </p>
          
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Aadityavoru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-off-white/60 hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/aaditya-voruganti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-off-white/60 hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:helloaadityav@gmail.com"
              className="text-off-white/60 hover:text-electric-blue transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
