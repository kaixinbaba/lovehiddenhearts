import { aboutText } from '../data'

function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-rose-dark mb-6 flex items-center justify-center gap-2">
          <span aria-hidden="true">💕</span>
          About Love Hidden Hearts
          <span aria-hidden="true">💕</span>
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {aboutText}
        </p>
      </div>
    </section>
  )
}

export default About
