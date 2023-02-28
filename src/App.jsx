import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto w-full h-full ">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
