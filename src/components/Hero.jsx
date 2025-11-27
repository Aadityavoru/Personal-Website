import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  const stats = [
    { value: '50,000+', label: 'Vehicles Running My Models' },
    { value: '10,000+', label: 'Platform Users' },
    { value: '6', label: 'Humanoid Robots Deployed' },
  ]

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-mono">
            Available for Full-Time Opportunities — May 2026
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-off-white mb-6 tracking-tight"
        >
          Aaditya Voruganti
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-electric-blue mb-6"
        >
          AI & Software Engineer
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-off-white/80 mb-8 max-w-3xl mx-auto font-sans leading-relaxed"
        >
          Built and shipped vision models to <span className="text-electric-blue font-semibold">50,000+ vehicles</span> at Samsara, 
          led an AI platform scaled to <span className="text-electric-blue font-semibold">10,000+ users</span>, 
          and engineered real-time perception systems deployed on <span className="text-electric-blue font-semibold">6 humanoid robots</span>.
        </motion.p>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-electric-blue">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-off-white/60 font-sans mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="/resume.pdf"
            download="Aaditya_Voruganti_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-all font-sans font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <motion.a
            href="https://github.com/Aadityavoru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-slate-600 text-off-white rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all font-sans"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/aaditya-voruganti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-slate-600 text-off-white rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all font-sans"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>
          
          <motion.a
            href="mailto:helloaadityav@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-slate-600 text-off-white rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all font-sans"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Email
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-off-white/40 hover:text-electric-blue transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono mb-2">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
