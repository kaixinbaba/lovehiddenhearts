function GameFrame() {
  return (
    <div id="play" className="max-w-[960px] mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      <div className="aspect-[5/3] w-full">
        <iframe
          src="https://cdn.htmlgames.com/LoveHiddenHearts/index.html"
          className="w-full h-full border-0"
          allow="fullscreen; autoplay; gamepad"
          title="Love Hidden Hearts"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default GameFrame
