import { tips } from '../data'

function Tips() {
  return (
    <section id="tips" className="py-16 px-4 bg-white/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-dark mb-8 text-center flex items-center justify-center gap-2">
          <span aria-hidden="true">💡</span>
          Tips & Tricks
          <span aria-hidden="true">💡</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-white/70 rounded-xl p-6 shadow-sm border border-rose-pale/30 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{tip.icon}</div>
              <h3 className="font-semibold text-lg text-rose-dark mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tips
