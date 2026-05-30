import { Link } from 'react-router-dom'
import { relatedPages } from '../data'

function RelatedPages() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-rose-dark mb-2">
          More Ways to Play
        </h2>
        <p className="text-gray-500 mb-8">Explore more ways to enjoy Love Hidden Hearts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="rounded-xl border-2 border-pink-200 bg-white/80 px-6 py-8 text-center hover:border-rose-primary hover:shadow-lg hover:bg-rose-50 transition-all duration-200 group"
            >
              <h3 className="text-lg font-semibold text-rose-dark group-hover:text-rose-primary transition-colors">
                {page.title}
              </h3>
              <span className="mt-2 inline-block text-sm text-rose-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedPages
