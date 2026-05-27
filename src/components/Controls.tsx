import { controlsItems } from '../data'

function Controls() {
  return (
    <section id="controls" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-dark mb-8 text-center flex items-center justify-center gap-2">
          <span aria-hidden="true">🎮</span>
          Controls
          <span aria-hidden="true">🎮</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {controlsItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 rounded-xl p-6 shadow-sm border border-rose-pale/30 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
              <h3 className="font-semibold text-lg text-rose-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Controls
