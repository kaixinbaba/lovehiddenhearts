import Hero from '../components/Hero'
import FullscreenButton from '../components/FullscreenButton'
import About from '../components/About'
import HowToPlay from '../components/HowToPlay'
import Controls from '../components/Controls'
import Tips from '../components/Tips'
import FAQ from '../components/FAQ'
import RelatedPages from '../components/RelatedPages'

function HomePage() {
  return (
    <>
      <Hero />
      <FullscreenButton />
      <About />
      <HowToPlay />
      <Controls />
      <Tips />
      <FAQ />
      <RelatedPages />
    </>
  )
}

export default HomePage
