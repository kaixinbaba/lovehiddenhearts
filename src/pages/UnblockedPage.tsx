import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameFrame from '../components/GameFrame'

function UnblockedPage() {
  useEffect(() => {
    document.title = 'Love Hidden Hearts Unblocked - Play Free at School & Work'
  }, [])

  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-rose-primary hover:text-rose-dark text-sm font-medium transition-colors">
          &larr; Back to Love Hidden Hearts
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-rose-dark mt-4 mb-3">
          Love Hidden Hearts Unblocked
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Play Love Hidden Hearts unblocked at school, work, or anywhere with network restrictions. No firewall blocks this game — it runs right in your browser.
        </p>

        <GameFrame />

        <article className="mt-12 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-rose-dark">Play Love Hidden Hearts Anywhere — No Restrictions</h2>
          <p>
            Many schools and workplaces block gaming websites, making it hard to enjoy a quick break. Love Hidden Hearts Unblocked is hosted on a domain that typically bypasses these restrictions, so you can play freely wherever you are.
          </p>
          <p>
            The game runs entirely in your browser using HTML5 technology. No executables, no downloads, and no admin permissions required. Since it is just a regular web page, most network filters do not flag it as a game.
          </p>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Why This Version Works on Restricted Networks</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No game client</strong> — plays directly in the browser, so nothing to install or bypass.</li>
            <li><strong>HTTPS secured</strong> — encrypted traffic looks like any other website to network monitors.</li>
            <li><strong>Minimal bandwidth</strong> — the game loads quickly even on slow or throttled connections.</li>
            <li><strong>No external plugins</strong> — runs on pure HTML5, no Flash or Java needed.</li>
          </ul>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">How to Access Love Hidden Hearts at School</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open your browser (Chrome, Edge, or Safari all work).</li>
            <li>Visit <strong>lovehiddenhearts.com</strong> — bookmark it for quick access.</li>
            <li>Click "Play Fullscreen" or play directly in the game window.</li>
            <li>If the site is blocked, try using your phone's hotspot or a different browser.</li>
          </ol>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Tips for Playing Unblocked</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Use headphones</strong> — the game has sound effects, but you can mute them if needed.</li>
            <li><strong>Keep a tab open</strong> — the game saves your progress in the browser, so don't close the tab mid-level.</li>
            <li><strong>Play in a separate window</strong> — pop the game into its own window to keep it discreet.</li>
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

export default UnblockedPage
