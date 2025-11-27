import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'Go', 'Haskell', 'JavaScript']
  },
  {
    category: 'AI/ML',
    skills: ['PyTorch', 'CUDA', 'TensorFlow', 'Vertex AI', 'LLMs']
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Kafka', 'gRPC']
  },
  {
    category: 'Robotics',
    skills: ['ROS 2', 'Visual SLAM', 'OpenCV', 'NVIDIA Jetson']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-electric-blue" size={32} />
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-off-white">
              Technical Skills
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-mono font-semibold text-electric-blue mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-4 py-2 bg-electric-blue/20 border border-electric-blue/30 rounded-md text-sm font-sans text-electric-blue hover:bg-electric-blue/30 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

