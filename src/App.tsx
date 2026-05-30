import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import UnblockedPage from './pages/UnblockedPage'
import NoDownloadPage from './pages/NoDownloadPage'
import FullscreenPage from './pages/FullscreenPage'
import HowToPlayPage from './pages/HowToPlayPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/unblocked" element={<UnblockedPage />} />
          <Route path="/no-download" element={<NoDownloadPage />} />
          <Route path="/fullscreen" element={<FullscreenPage />} />
          <Route path="/how-to-play" element={<HowToPlayPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
