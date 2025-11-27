import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const awards = [
  {
    title: 'IBM Call for Code 2021',
    description: 'Regional Winner / Top 10 Global (400k+ participants)'
  },
  {
    title: 'AGI House',
    description: '2nd Place Winner (Sponsored by OpenAI/DeepMind)'
  },
  {
    title: 'UIUC Engineering Open House',
    description: 'Best Engineering Project (2024 & 2025)'
  }
]

const Awards = () => {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-electric-blue" size={32} />
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-off-white">
              Awards
            </h2>
          </div>
        </motion.div>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-electric-blue/50 transition-all"
            >
              <h3 className="text-xl font-mono font-semibold text-electric-blue mb-2">
                {award.title}
              </h3>
              <p className="text-off-white/80 font-sans">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

