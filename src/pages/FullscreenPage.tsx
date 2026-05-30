import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameFrame from '../components/GameFrame'
import FullscreenButton from '../components/FullscreenButton'

function FullscreenPage() {
  useEffect(() => {
    document.title = 'Love Hidden Hearts Fullscreen - Immersive Hidden Object Experience'
  }, [])

  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-rose-primary hover:text-rose-dark text-sm font-medium transition-colors">
          &larr; Back to Love Hidden Hearts
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-rose-dark mt-4 mb-3">
          Love Hidden Hearts Fullscreen
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Experience Love Hidden Hearts in immersive fullscreen mode. See every detail of the beautiful romantic scenes and spot hidden hearts more easily on a larger view.
        </p>

        <GameFrame />
        <FullscreenButton />

        <article className="mt-12 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-rose-dark">Why Play in Fullscreen?</h2>
          <p>
            Finding hidden hearts requires a sharp eye and attention to detail. Fullscreen mode removes all distractions — no browser tabs, no bookmarks bar, no taskbar. Just you and the beautiful artwork.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Bigger hearts are easier to spot</strong> — the game scales up to fill your entire screen, making hidden hearts more visible.</li>
            <li><strong>No distractions</strong> — browser chrome, notifications, and other tabs disappear so you can focus completely.</li>
            <li><strong>Better on small screens</strong> — fullscreen mode maximizes the play area on laptops and tablets.</li>
            <li><strong>More immersive</strong> — the romantic artwork fills your entire field of view, making the experience more engaging.</li>
          </ul>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">How to Enter Fullscreen Mode</h2>
          <div className="space-y-4">
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Method 1: The Fullscreen Button</h3>
              <p>Click the <strong>"Play Fullscreen"</strong> button below the game window. This is the easiest way — it works on both desktop and mobile.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Method 2: Browser Fullscreen</h3>
              <p>Press <kbd className="bg-white px-2 py-0.5 rounded border text-sm font-mono">F11</kbd> on Windows or <kbd className="bg-white px-2 py-0.5 rounded border text-sm font-mono">Cmd+Ctrl+F</kbd> on Mac to toggle browser fullscreen mode.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Method 3: Mobile Fullscreen</h3>
              <p>Tap the fullscreen button, then rotate your phone to landscape for the best experience. Pinch-to-zoom lets you inspect tricky spots up close.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Fullscreen Troubleshooting</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Button not working?</strong> Some browsers require a user gesture (click) to enter fullscreen. Make sure you are clicking the button directly.</li>
            <li><strong>Game too small in fullscreen?</strong> The game maintains its aspect ratio. Use a device with a larger screen or try landscape orientation on mobile.</li>
            <li><strong>Exit fullscreen</strong> — press <kbd className="bg-gray-100 px-1.5 py-0.5 rounded border text-sm font-mono">Esc</kbd> on desktop or swipe from the top/bottom on mobile.</li>
          </ul>
        </article>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-rose-primary hover:bg-rose-dark text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Play Love Hidden Hearts Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FullscreenPage
