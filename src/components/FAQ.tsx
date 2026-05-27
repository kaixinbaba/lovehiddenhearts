import { useState } from 'react'
import { faqs } from '../data'

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-dark mb-8 text-center flex items-center justify-center gap-2">
          <span aria-hidden="true">💬</span>
          Frequently Asked Questions
          <span aria-hidden="true">💬</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-rose-pale/40 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-rose-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
