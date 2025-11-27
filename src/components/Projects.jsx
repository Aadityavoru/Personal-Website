import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Blueprint-Trvise',
    description: 'Distributed platform for non-CS creators scaled to 10k+ users with multi-agent LLM systems.',
    link: 'https://blueprint-trvise.web.app'
  },
  {
    title: 'Robotic Perception Box',
    description: 'NVIDIA Jetson system fusing LiDAR, IMU, and cameras for humanoid robots.',
    link: 'https://github.com/uiuc-iml/Robotic-Perception-Box'
  },
  {
    title: 'Illinois Space Society Avionics',
    description: 'Telemetry setup capable of streaming live video over 60 miles altitude.',
    link: 'https://github.com/ISSUIUC'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-off-white mb-2">
            Projects & Research
          </h2>
          <p className="text-off-white/60 font-sans">
            Selected work showcasing scalable systems and robotics infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-electric-blue/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-mono font-semibold text-electric-blue group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink size={20} className="text-electric-blue/50 group-hover:text-electric-blue transition-colors" />
              </div>
              <p className="text-off-white/80 font-sans text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

