import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'Samsara Inc',
    role: 'Embedded Software Research Intern',
    highlights: [
      'Deployed TinyCLIP models to 50k+ vehicles',
      'Cut data retrieval time by 99% (24hrs to 15mins)'
    ]
  },
  {
    company: 'Intelligent Motion Lab',
    role: 'Computer Vision Research Intern',
    highlights: [
      'Provisional Patent Pending for memory-compression algorithms (Calibrated Top-k)',
      'Reduced GPU overhead by 80%'
    ]
  },
  {
    company: 'Trvise',
    role: 'Lead ML Infra Engineer',
    highlights: [
      'Scaled platform to 10,000+ users',
      'Built 22-table AWS RDS backend'
    ]
  },
  {
    company: 'Intelligent Motion Lab',
    role: 'Robotics Research Intern',
    highlights: [
      'Perception system for humanoid nurses',
      'NVIDIA Jetson Orin and ROS 2'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-electric-blue" size={32} />
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-off-white">
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-electric-blue/30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 bg-electric-blue rounded-full border-4 border-deep-slate"></div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                  <h3 className="text-xl font-mono font-semibold text-electric-blue mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-off-white font-sans mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-off-white/80 font-sans flex items-start gap-2">
                        <span className="text-electric-blue mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

