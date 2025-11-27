import { motion } from 'framer-motion'
import { ExternalLink, Rocket, Code2, Cpu } from 'lucide-react'

const projects = [
  {
    title: 'Blueprint-Trvise',
    icon: '🚀',
    category: 'AI Platform',
    description: 'Distributed platform for non-CS creators to share projects, scaled to 10k+ users with multi-agent LLM systems transforming videos into interactive learning guides.',
    link: 'https://blueprint-trvise.web.app',
    techStack: ['React', 'AWS RDS', 'Vertex AI', 'LangChain', 'PostgreSQL'],
    impact: '10,000+ Users',
    color: 'from-orange-500/20 to-red-500/10',
    borderColor: 'border-orange-500/30'
  },
  {
    title: 'Robotic Perception Box',
    icon: '🤖',
    category: 'Robotics',
    description: 'NVIDIA Jetson Orin perception system fusing synchronized LiDAR, IMU, and camera data with custom CUDA abstraction layer for humanoid robots.',
    link: 'https://github.com/uiuc-iml/Robotic-Perception-Box',
    techStack: ['C++', 'ROS 2', 'CUDA', 'PyTorch', 'Jetson Orin'],
    impact: '6 Robots Deployed',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30'
  },
  {
    title: 'Illinois Space Society Avionics',
    icon: '🚀',
    category: 'Embedded Systems',
    description: 'Engineered telemetry setup for ground station software with LoRa and Radiohead on custom MIDAS avionics controller running FreeRTOS. Capable of streaming live video over 60+ miles altitude.',
    link: 'https://github.com/ISSUIUC',
    techStack: ['FreeRTOS', 'LoRa', 'Embedded C', 'Radiohead'],
    impact: '60+ Miles Range',
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/30'
  },
  {
    title: 'Samsara Vista',
    icon: '🚛',
    category: 'AI Infrastructure',
    description: 'Fleet video search application enabling natural-language visual search across 50,000+ vehicles with on-device vector DB and TinyCLIP inference.',
    techStack: ['Go', 'TinyCLIP', 'gRPC', 'FastAPI', 'AWS S3'],
    impact: '99% Faster Retrieval',
    color: 'from-green-500/20 to-emerald-500/10',
    borderColor: 'border-green-500/30'
  },
  {
    title: '3D Semantic Mapping',
    icon: '🧠',
    category: 'Computer Vision',
    description: 'Novel memory-compression algorithms (Calibrated Top-k & Encoded Fusion) for dense 3D reconstruction with sparse voxel hashing, enabling real-time mapping for 150+ classes.',
    techStack: ['PyTorch', 'Open3D', 'CUDA', 'ScanNet++'],
    impact: 'Patent Pending',
    color: 'from-yellow-500/20 to-amber-500/10',
    borderColor: 'border-yellow-500/30'
  },
  {
    title: 'SILSIM Physics Engine',
    icon: '🎯',
    category: 'Simulation',
    description: 'Software-in-the-loop simulation physics engine enabling real-time prediction of rocket dynamics and GPS tracking for Illinois Space Society.',
    link: 'https://github.com/ISSUIUC',
    techStack: ['Python', 'Physics Simulation', 'GPS'],
    impact: 'Real-time Dynamics',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="text-electric-blue" size={36} />
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-off-white">
              Projects & Research
            </h2>
          </div>
          <p className="text-off-white/60 font-sans max-w-2xl mx-auto">
            Selected work showcasing scalable AI systems, robotics infrastructure, and embedded solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-gradient-to-br ${project.color} rounded-xl p-0.5 h-full`}
            >
              <div className={`bg-slate-900/95 rounded-xl p-6 border ${project.borderColor} h-full flex flex-col hover:bg-slate-900/80 transition-all`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <span className="text-xs font-mono text-electric-blue/80 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-mono font-semibold text-off-white group-hover:text-electric-blue transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink size={16} className="text-electric-blue" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-off-white/70 font-sans text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded-full text-electric-blue text-xs font-mono">
                    {project.impact}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-800/80 border border-slate-700/50 rounded text-xs font-mono text-off-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
