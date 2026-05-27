function FullscreenButton() {
  const handleFullscreen = () => {
    const container = document.getElementById('play')
    if (!container) return
    try {
      if (container.requestFullscreen) {
        container.requestFullscreen()
      }
    } catch {
      // browser doesn't support fullscreen — silently ignore
    }
  }

  return (
    <div className="max-w-[960px] mx-auto mt-4 px-4 text-center">
      <button
        onClick={handleFullscreen}
        className="bg-rose-primary hover:bg-rose-dark text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
      >
        Play Fullscreen
      </button>
    </div>
  )
}

export default FullscreenButton
