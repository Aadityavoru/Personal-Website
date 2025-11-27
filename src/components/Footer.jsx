import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: '#about', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#awards', label: 'Awards' },
    { href: '#resume', label: 'Resume' }
  ]

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/80 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-mono font-bold text-electric-blue mb-4">
              Aaditya Voruganti
            </h3>
            <p className="text-off-white/60 font-sans text-sm leading-relaxed mb-6">
              AI & Software Engineer specializing in robotics and ML infrastructure. 
              Building the future of autonomous systems.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Aadityavoru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/80 rounded-lg text-off-white/60 hover:text-electric-blue hover:bg-slate-700 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/aaditya-voruganti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/80 rounded-lg text-off-white/60 hover:text-electric-blue hover:bg-slate-700 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a
                href="mailto:helloaadityav@gmail.com"
                className="p-3 bg-slate-800/80 rounded-lg text-off-white/60 hover:text-electric-blue hover:bg-slate-700 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-mono font-semibold text-off-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-off-white/60 hover:text-electric-blue transition-colors font-sans text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-mono font-semibold text-off-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-off-white/60 font-sans text-sm">
                <Mail size={16} className="text-electric-blue" />
                <a href="mailto:helloaadityav@gmail.com" className="hover:text-electric-blue transition-colors">
                  helloaadityav@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-off-white/60 font-sans text-sm">
                <Phone size={16} className="text-electric-blue" />
                <span>+1 563-223-7343</span>
              </li>
              <li className="flex items-center gap-3 text-off-white/60 font-sans text-sm">
                <MapPin size={16} className="text-electric-blue" />
                <span>Urbana-Champaign, IL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-off-white/40 font-sans text-sm">
            © {currentYear} Aaditya Voruganti. All rights reserved.
          </p>
          <p className="text-off-white/40 font-sans text-sm">
            Available for Full-Time Opportunities • May 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
