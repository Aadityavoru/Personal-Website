import { motion } from 'framer-motion'
import { Trophy, Globe, Cpu, Award } from 'lucide-react'

const awards = [
  {
    title: 'IBM Call for Code 2021',
    subtitle: 'WaterMon Project',
    description: 'Regional Winner & Top 10 Global from 400,000+ participants across 179 countries',
    icon: Globe,
    badge: 'Global Top 10',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    partner: 'with Linux Foundation'
  },
  {
    title: 'AGI House Hackathon',
    subtitle: '2nd Place Winner',
    description: 'Awarded 2nd place at prestigious AI hackathon sponsored by leading AI research organizations',
    icon: Cpu,
    badge: '2nd Place',
    color: 'from-yellow-500/20 to-orange-500/10',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/20',
    partner: 'Sponsored by OpenAI, Google DeepMind, and Windsurf'
  },
  {
    title: 'UIUC Engineering Open House',
    subtitle: 'Best Engineering Project',
    description: 'Top 3 overall project two years consecutively at UIUC\'s largest engineering showcase',
    icon: Award,
    badge: '2024 & 2025',
    color: 'from-orange-500/20 to-red-500/10',
    borderColor: 'border-orange-500/30',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/20',
    partner: '40,000+ attendees annually'
  }
]

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-deep-slate to-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-electric-blue" size={36} />
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-off-white">
              Awards & Recognition
            </h2>
          </div>
          <p className="text-off-white/60 font-sans max-w-2xl mx-auto">
            Recognized at global hackathons and engineering competitions
          </p>
        </motion.div>

        <div className="space-y-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-gradient-to-r ${award.color} rounded-xl p-0.5`}
              >
                <div className={`bg-slate-900/95 rounded-xl p-6 sm:p-8 border ${award.borderColor} flex flex-col sm:flex-row gap-6`}>
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${award.iconBg} flex items-center justify-center`}>
                      <IconComponent size={36} className={award.iconColor} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-mono font-bold text-off-white">
                        {award.title}
                      </h3>
                      <span className="px-3 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded-full text-electric-blue text-xs font-mono">
                        {award.badge}
                      </span>
                    </div>
                    <p className="text-electric-blue font-sans font-medium mb-2">
                      {award.subtitle}
                    </p>
                    <p className="text-off-white/70 font-sans mb-3">
                      {award.description}
                    </p>
                    <p className="text-off-white/50 font-sans text-sm">
                      {award.partner}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Awards
