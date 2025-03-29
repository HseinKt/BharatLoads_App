import AboutSection from "./components/AboutSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

function App() {

  return (
    <div className="main-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
