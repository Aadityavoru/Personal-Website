import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const coursework = {
  'AI/Robotics': ['Mobile Robotics', 'Deep Learning for CV', 'Applied Machine Learning', 'Reinforcement Learning'],
  'Systems': ['Distributed Systems', 'Systems Programming', 'Computer Architecture', 'Database Systems'],
  'Theory': ['Algorithms', 'Data Structures', 'Functional Programming (Haskell)', 'Numerical Methods', 'Statistics']
}

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="text-electric-blue" size={36} />
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-off-white">
              Education
            </h2>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl p-1"
        >
          <div className="bg-slate-900/95 rounded-xl p-6 sm:p-10 border border-orange-500/20">
            {/* University Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#13294B] flex items-center justify-center p-2 overflow-hidden flex-shrink-0">
                  <img 
                    src="https://grainger.illinois.edu/themes/flavor_flavor_starter/images/block-i-logo-full-color-rgb.svg"
                    alt="University of Illinois"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<span class="text-white font-mono font-bold text-2xl">I</span>'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-mono font-bold text-off-white mb-2">
                    University of Illinois at Urbana-Champaign
                  </h3>
                  <p className="text-lg text-electric-blue font-sans font-medium mb-2">
                    BS/MS in Computer Science
                  </p>
                  <p className="text-off-white/80 font-sans">
                    Minor in Econometrics (Quantitative Economics)
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <Award size={18} className="text-yellow-400" />
                  <span className="text-yellow-400 font-mono text-sm">James Scholar Honors</span>
                </div>
                <div className="px-4 py-2 bg-electric-blue/20 border border-electric-blue/30 rounded-lg text-center">
                  <div className="text-2xl font-mono font-bold text-electric-blue">3.75</div>
                  <div className="text-xs text-off-white/60">GPA</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center gap-4 mb-8 text-off-white/70 font-sans">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-electric-blue rounded-full"></span>
                Aug 2022
              </span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-electric-blue to-electric-blue/20"></div>
              <span className="flex items-center gap-2">
                May 2026
                <span className="w-2 h-2 bg-electric-blue/40 rounded-full"></span>
              </span>
            </div>

            {/* Coursework */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={20} className="text-electric-blue" />
                <h4 className="text-xl font-mono font-semibold text-off-white">
                  Relevant Coursework
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(coursework).map(([category, courses], catIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                  >
                    <h5 className="text-sm font-mono text-electric-blue mb-3 uppercase tracking-wider">
                      {category}
                    </h5>
                    <div className="space-y-2">
                      {courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 bg-slate-800/60 border border-slate-700/50 rounded-md text-sm font-sans text-off-white/80"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </motion.div>
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
