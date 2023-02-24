import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Links from './pages/Links/Links'
import Projects from './pages/Projects/Projects'

function App() {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto w-full h-full ">
                <Home />
                <About />
                <Projects />
                <Links />
            </main>
        </div>
    )
}

export default App
