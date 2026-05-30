import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameFrame from '../components/GameFrame'

function NoDownloadPage() {
  useEffect(() => {
    document.title = 'Love Hidden Hearts No Download - Play Instantly in Your Browser'
  }, [])

  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-rose-primary hover:text-rose-dark text-sm font-medium transition-colors">
          &larr; Back to Love Hidden Hearts
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-rose-dark mt-4 mb-3">
          Love Hidden Hearts No Download
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Play Love Hidden Hearts instantly — no download, no install, no registration. Just open your browser and start finding hidden hearts.
        </p>

        <GameFrame />

        <article className="mt-12 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-rose-dark">Instant Play — Nothing to Install</h2>
          <p>
            Love Hidden Hearts runs entirely in your web browser. There is nothing to download, install, or configure. You do not need to be a computer expert — if you can open a web page, you can play this game.
          </p>
          <p>
            Built with modern HTML5 technology, the game works across all major browsers including Chrome, Safari, Firefox, and Edge. No plugins, no extensions, no app stores.
          </p>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Why No Download Matters</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Play on any device</strong> — desktop, laptop, tablet, or phone. As long as it has a browser, it works.</li>
            <li><strong>No storage space needed</strong> — the game loads from the web, saving precious disk space.</li>
            <li><strong>No updates to manage</strong> — you always play the latest version automatically.</li>
            <li><strong>Safe and secure</strong> — no executable files means no risk of viruses or malware.</li>
            <li><strong>Start in seconds</strong> — no waiting for downloads or installations to complete.</li>
          </ul>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">How Browser Gaming Works</h2>
          <p>
            Browser games like Love Hidden Hearts use HTML5, JavaScript, and CSS to run directly in your browser window. Think of it like watching a YouTube video — the content streams to you, but nothing stays on your device. This makes browser games:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Faster to start than downloaded games</li>
            <li>Compatible with any operating system (Windows, Mac, Linux, ChromeOS)</li>
            <li>Easy to switch between devices — just open the same URL</li>
            <li>Friendlier for shared or public computers where you cannot install software</li>
          </ul>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Get Started in 3 Seconds</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>You are already on the page — just scroll up to the game window.</li>
            <li>Click or tap to start finding hearts.</li>
            <li>That is it. No sign-up, no download, no waiting.</li>
          </ol>
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

export default NoDownloadPage
