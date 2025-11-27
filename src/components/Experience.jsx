import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'Intelligent Motion Lab',
    location: 'UIUC',
    role: 'Computer Vision Research Intern',
    type: 'Research',
    period: 'Aug 2025 – Present',
    badge: 'Provisional Patent Pending',
    logo: '🔬',
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
    techStack: ['PyTorch', 'Open3D', 'CUDA', 'Python'],
    highlights: [
      'Architected two novel memory-compression algorithms (Calibrated Top-k & Encoded Fusion) for dense 3D semantic mapping',
      'Reduced GPU memory overhead by 80%+ while preserving calibration accuracy',
      'Solved memory bottlenecks via custom sparse voxel hashing, achieving real-time reconstruction for 150+ classes',
      'Validated compression pipelines on ScanNet++, resulting in provisional patent filing by University of Illinois'
    ],
    impact: '80% GPU Memory Reduction'
  },
  {
    company: 'Samsara Inc',
    location: 'San Francisco, CA',
    role: 'Embedded Software Research Intern',
    type: 'AI Infrastructure',
    period: 'May 2025 – Aug 2025',
    logo: '🚛',
    color: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/30',
    techStack: ['Go', 'TinyCLIP', 'gRPC', 'FastAPI', 'Docker', 'Redis', 'AWS S3'],
    highlights: [
      'Built scalable AI infrastructure in Go, deploying TinyCLIP models on Ambarella NPU for real-time multimodal inference across 50K+ vehicles',
      'Developed on-device vector DB for natural-language visual search via gRPC, enabling instant retrieval of embeddings',
      'Deployed FastAPI microservices (Docker, Redis) serving multimodal embeddings through REST endpoints',
      'Launched Samsara Vista, a fleet video search app on AWS S3, cutting ML data retrieval from 24hrs to 15mins'
    ],
    impact: '99% Faster Data Retrieval'
  },
  {
    company: 'Intelligent Motion Lab',
    location: 'UIUC',
    role: 'Robotics Research Intern',
    type: 'Research',
    period: 'Aug 2024 – May 2025',
    logo: '🤖',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    link: 'https://github.com/uiuc-iml/Robotic-Perception-Box',
    techStack: ['C++', 'ROS 2', 'PyTorch', 'TensorFlow', 'CUDA', 'Gazebo', 'NVIDIA Jetson'],
    highlights: [
      'Developed perception system for humanoid robotic nurse enabling real-time scene understanding in hospitals',
      'Engineered NVIDIA Jetson Orin perception system (C++, ROS 2) to deploy and accelerate PyTorch/TensorFlow models',
      'Fused synchronized data from LiDARs, IMUs, and cameras using custom CUDA-based abstraction layer',
      'Integrated visual SLAM algorithms, tested in Gazebo and deployed on 6 humanoid robotic platforms'
    ],
    impact: '6 Robots Deployed'
  },
  {
    company: 'Trvise',
    location: 'Remote',
    role: 'Lead ML Infrastructure & Fullstack Engineer',
    type: 'Startup',
    period: 'Jan 2025 – June 2025',
    logo: '🚀',
    color: 'from-orange-500/20 to-orange-600/10',
    borderColor: 'border-orange-500/30',
    link: 'https://blueprint-trvise.web.app',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS RDS', 'Vertex AI', 'LangChain', 'Docker'],
    highlights: [
      'Built Blueprint-Trvise, a distributed platform with companion mobile app for non-CS creators to share projects',
      'Designed 22-table AWS RDS backend (PostgreSQL/MySQL) for authentication and media storage with HLS streaming',
      'Integrated Google Vertex AI and OpenAI LangChain to develop multi-agent LLM systems for interactive learning',
      'Automated Docker-enabled CI/CD with GitHub Actions (99.9% uptime), enabling scalable event-driven AI agents'
    ],
    impact: '10,000+ Users'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-deep-slate to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-electric-blue" size={36} />
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-off-white">
              Experience
            </h2>
          </div>
          <p className="text-off-white/60 font-sans max-w-2xl mx-auto">
            Building AI infrastructure, robotics systems, and scalable platforms at the intersection of research and industry
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gradient-to-r ${exp.color} rounded-xl p-1`}
            >
              <div className={`bg-slate-900/95 rounded-xl p-6 sm:p-8 border ${exp.borderColor}`}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.logo}</div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-mono font-bold text-off-white">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-400 text-xs font-mono">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-electric-blue font-sans font-medium">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-off-white/60 text-sm font-sans">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-mono">
                      {exp.impact}
                    </span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        <ExternalLink size={18} className="text-electric-blue" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-md text-xs font-mono text-off-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-off-white/80 font-sans flex items-start gap-3">
                      <span className="text-electric-blue mt-1.5 text-lg">›</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
