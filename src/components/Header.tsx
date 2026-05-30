import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-rose-dark hover:text-rose-primary transition-colors">Love Hidden Hearts</a>
        <nav className="flex gap-6 text-sm font-medium">
          <button onClick={() => scrollTo('play')} className="text-rose-primary hover:text-rose-dark transition-colors cursor-pointer">Play</button>
          <button onClick={() => scrollTo('how-to-play')} className="text-rose-primary hover:text-rose-dark transition-colors cursor-pointer">How to Play</button>
          <button onClick={() => scrollTo('faq')} className="text-rose-primary hover:text-rose-dark transition-colors cursor-pointer">FAQ</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
