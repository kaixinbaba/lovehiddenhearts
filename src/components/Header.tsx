function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-lg font-bold text-rose-dark">Love Hidden Hearts</span>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#play" className="text-rose-primary hover:text-rose-dark transition-colors">Play</a>
          <a href="#how-to-play" className="text-rose-primary hover:text-rose-dark transition-colors">How to Play</a>
          <a href="#faq" className="text-rose-primary hover:text-rose-dark transition-colors">FAQ</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
