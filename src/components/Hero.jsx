import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold text-off-white mb-4"
        >
          Aaditya Voruganti
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-electric-blue mb-6"
        >
          AI & Software Engineer | Robotics & ML Infrastructure
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-off-white/80 mb-12 max-w-3xl mx-auto font-sans"
        >
          Building scalable vision models for 50,000+ vehicles and real-time perception for humanoid robots.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="https://github.com/Aadityavoru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-electric-blue/10 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-all font-sans"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View GitHub
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/aaditya-voruganti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-electric-blue/10 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-all font-sans"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
          
          <motion.a
            href="mailto:helloaadityav@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-electric-blue/10 border border-electric-blue text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-all font-sans"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

