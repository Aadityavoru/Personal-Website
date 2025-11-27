import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react'

const Resume = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="text-electric-blue" size={36} />
            <h2 className="text-4xl sm:text-5xl font-mono font-bold text-off-white">
              Resume
            </h2>
          </div>
          <p className="text-off-white/60 font-sans max-w-2xl mx-auto mb-8">
            Download my resume or view it directly below
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="/resume.pdf"
              download="Aaditya_Voruganti_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-all font-sans font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download PDF
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 text-off-white rounded-lg hover:border-electric-blue transition-all font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Open in New Tab
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/50 rounded-xl p-2 border border-slate-700/50"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-[600px] sm:h-[800px] lg:h-[1000px]"
            >
              <div className="flex flex-col items-center justify-center h-[400px] bg-slate-100 text-slate-600">
                <FileText size={48} className="mb-4 text-slate-400" />
                <p className="text-lg font-sans mb-4">Unable to display PDF</p>
                <a
                  href="/resume.pdf"
                  download="Aaditya_Voruganti_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-electric-blue text-white rounded-lg hover:bg-blue-500 transition-all font-sans"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume

