import { relatedPages } from '../data'

function RelatedPages() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-rose-dark mb-2">
          More Ways to Play
        </h2>
        <p className="text-gray-500 mb-8">New game pages coming soon</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedPages.map((page) => (
            <div
              key={page.title}
              className="rounded-xl border-2 border-dashed border-gray-300 bg-white/50 px-6 py-8 text-center cursor-not-allowed select-none"
            >
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                Coming Soon
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-400">
                {page.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedPages
