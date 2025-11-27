import { motion } from 'framer-motion'
import { Code, Cpu, Cloud, Bot, Database, Layers } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    icon: Code,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    skills: ['C++', 'Python', 'Go', 'C', 'JavaScript', 'Haskell']
  },
  {
    category: 'AI / Machine Learning',
    icon: Cpu,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    skills: ['PyTorch', 'TensorFlow', 'CUDA', 'Vertex AI', 'OpenAI/LangChain', 'JAX', 'Hugging Face', 'LLMs', 'Multi-Agent Systems']
  },
  {
    category: 'Robotics & Perception',
    icon: Bot,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    skills: ['ROS 2', 'Visual SLAM', 'Gazebo', 'OpenCV', 'IMUs', '3D Mapping', 'Localization', 'NVIDIA Jetson']
  },
  {
    category: 'Infrastructure & Cloud',
    icon: Cloud,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    skills: ['Docker', 'Kubernetes', 'Kafka', 'AWS (S3, RDS, EC2)', 'Google Cloud', 'CI/CD', 'gRPC', 'Redis', 'Distributed Systems']
  },
  {
    category: 'Full Stack & Databases',
    icon: Database,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    skills: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MySQL', 'Vector DBs', 'REST APIs', 'CDN', 'HLS/DASH']
  },
  {
    category: 'Embedded & IoT',
    icon: Layers,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    skills: ['FreeRTOS', 'Embedded Systems', 'Edge AI', 'LoRa', 'Sensor Networks', 'Embedded Linux', 'NVIDIA Jetson Platforms']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-deep-slate">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="text-electric-blue" size={36} />
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-off-white">
              Technical Skills
            </h2>
          </div>
          <p className="text-off-white/60 font-sans max-w-2xl mx-auto">
            Full-stack expertise spanning AI/ML, robotics, cloud infrastructure, and embedded systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`${category.bgColor} rounded-xl p-6 border ${category.borderColor} hover:border-opacity-60 transition-all`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <IconComponent className={category.color} size={24} />
                  </div>
                  <h3 className={`text-lg font-mono font-semibold ${category.color}`}>
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIndex * 0.05) + (skillIndex * 0.03) }}
                      className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/50 rounded-md text-sm font-sans text-off-white/90 hover:border-slate-600 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
