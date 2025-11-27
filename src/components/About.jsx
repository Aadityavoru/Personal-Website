import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const About = () => {
  const courses = [
    'Distributed Systems',
    'Deep Learning for CV',
    'Mobile Robotics',
    'Visual SLAM'
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-electric-blue" size={32} />
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-off-white">
              Education
            </h2>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-6 sm:p-8 border border-slate-700/50">
            <h3 className="text-2xl font-mono font-semibold text-electric-blue mb-2">
              University of Illinois at Urbana-Champaign (UIUC)
            </h3>
            <p className="text-lg text-off-white/90 font-sans mb-4">
              BS/MS in Computer Science, Minor in Econometrics (James Scholar Honors)
            </p>
            <div className="flex flex-wrap gap-4 text-off-white/80 font-sans mb-6">
              <span className="flex items-center gap-2">
                <span className="text-electric-blue">Graduation:</span> May 2026
              </span>
              <span className="flex items-center gap-2">
                <span className="text-electric-blue">GPA:</span> 3.75/4.0
              </span>
            </div>
            
            <div>
              <h4 className="text-lg font-mono font-semibold text-off-white mb-3">
                Key Coursework:
              </h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded-md text-sm font-sans text-electric-blue"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

