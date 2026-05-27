import { howToPlaySteps } from '../data'

function HowToPlay() {
  return (
    <section id="how-to-play" className="py-16 px-4 bg-white/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-dark mb-8 text-center flex items-center justify-center gap-2">
          <span aria-hidden="true">🎯</span>
          How to Play
          <span aria-hidden="true">🎯</span>
        </h2>
        <ol className="space-y-6">
          {howToPlaySteps.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-primary text-white flex items-center justify-center font-bold text-lg">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-lg text-rose-dark">{step.title}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowToPlay
