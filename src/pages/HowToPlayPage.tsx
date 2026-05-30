import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameFrame from '../components/GameFrame'

function HowToPlayPage() {
  useEffect(() => {
    document.title = 'How to Play Love Hidden Hearts - Complete Guide & Tips'
  }, [])

  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-rose-primary hover:text-rose-dark text-sm font-medium transition-colors">
          &larr; Back to Love Hidden Hearts
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-rose-dark mt-4 mb-3">
          How to Play Love Hidden Hearts
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A complete guide to playing Love Hidden Hearts. Learn the rules, master the controls, and discover pro tips to find every hidden heart.
        </p>

        <GameFrame />

        <article className="mt-12 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-rose-dark">Game Overview</h2>
          <p>
            Love Hidden Hearts is a hidden object puzzle game. Each level presents a beautifully illustrated romantic scene — a cozy cafe, a garden party, a moonlit balcony — with hearts cleverly hidden throughout the artwork. Your mission: find them all.
          </p>
          <p>
            There is no timer and no score penalty for wrong clicks. Take your time and enjoy the artwork. The game is designed to be relaxing and rewarding for players of all ages.
          </p>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Step-by-Step Guide</h2>
          <div className="space-y-4">
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Step 1: Open the Game</h3>
              <p>Visit <strong>lovehiddenhearts.com</strong> on any device with a browser. The game loads automatically — no download or sign-up required. Click "Play Fullscreen" for the best experience.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Step 2: Survey the Scene</h3>
              <p>Take a moment to scan the entire image before clicking. Hearts can hide anywhere — woven into fabric patterns, tucked behind objects, or blended into background textures. A systematic approach works best.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Step 3: Click the Hearts</h3>
              <p>When you spot a heart, click or tap on it. A sound effect and visual cue confirm each find. The hearts are often the same color as surrounding objects, so look carefully at shapes and outlines.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Step 4: Complete the Level</h3>
              <p>Find all hidden hearts to complete the level. Each scene has a set number of hearts to discover. Once all are found, you automatically advance to the next scene with new artwork and challenges.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Controls</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Desktop</h3>
              <p>Use your mouse to point and click on hearts. Move the cursor slowly over the scene — some hearts reveal themselves with a subtle glow on hover.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-2">Mobile & Tablet</h3>
              <p>Tap the screen to find hearts. Use pinch-to-zoom in fullscreen mode to inspect tricky spots up close. Rotate to landscape for a wider view.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Pro Tips & Strategies</h2>
          <div className="space-y-4">
            <div className="bg-love-accent/20 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-1">Start from the Edges</h3>
              <p>Work your way around the border of the scene first, then spiral inward. This systematic method ensures you never miss a spot.</p>
            </div>
            <div className="bg-love-accent/20 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-1">Look for Color Contrast</h3>
              <p>Hearts often blend into the background, but slight color differences give them away. Watch for red, pink, and rose tones that stand out from their surroundings.</p>
            </div>
            <div className="bg-love-accent/20 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-1">Change Your Perspective</h3>
              <p>If you get stuck, look away for a moment and come back with fresh eyes. Sometimes stepping back — literally or figuratively — makes hidden objects pop into view.</p>
            </div>
            <div className="bg-love-accent/20 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-1">Check Patterns and Textures</h3>
              <p>Hearts are often disguised within fabric folds, floral arrangements, wallpaper patterns, and decorative details. Pay extra attention to areas with intricate designs.</p>
            </div>
            <div className="bg-love-accent/20 rounded-xl p-6">
              <h3 className="font-semibold text-rose-dark text-lg mb-1">Use Fullscreen Mode</h3>
              <p>Playing in fullscreen removes distractions and makes hearts appear larger. On mobile, pinch-to-zoom in fullscreen lets you examine suspicious areas in detail.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-rose-dark mt-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-pink-200 rounded-xl p-5">
              <h3 className="font-semibold text-rose-dark mb-1">How many levels are there?</h3>
              <p className="text-gray-600">The game features multiple beautifully illustrated scenes. Each level increases slightly in difficulty, with hearts hidden more cleverly as you progress.</p>
            </div>
            <div className="border border-pink-200 rounded-xl p-5">
              <h3 className="font-semibold text-rose-dark mb-1">Is there a time limit?</h3>
              <p className="text-gray-600">No. Play at your own pace. There is no countdown, no pressure, and no penalty for taking your time.</p>
            </div>
            <div className="border border-pink-200 rounded-xl p-5">
              <h3 className="font-semibold text-rose-dark mb-1">Can I replay completed levels?</h3>
              <p className="text-gray-600">Yes! You can replay any level to improve your speed or simply enjoy the artwork again.</p>
            </div>
            <div className="border border-pink-200 rounded-xl p-5">
              <h3 className="font-semibold text-rose-dark mb-1">Does the game work offline?</h3>
              <p className="text-gray-600">The game requires an internet connection since it loads from the web. Once a level is loaded, it should continue working even if your connection drops briefly.</p>
            </div>
          </div>
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

export default HowToPlayPage
