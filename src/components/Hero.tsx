function Hero() {
  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-dark mb-3">
          Love Hidden Hearts
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Find all the hidden hearts in this charming puzzle game. Search every corner of beautiful romantic scenes — perfect for players of all ages.
        </p>

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
      </div>
    </section>
  )
}

export default Hero
