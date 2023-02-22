import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Links from './pages/Links/Links'
import Projects from './pages/Projects/Projects'

function App() {
    return (
        <div>
            <Navbar />
            <main className="grid grid-flow-row auto-rows-max w-full h-full">
                <Home />
                <About />
                <Projects />
                <Links />
            </main>
        </div>
    )
}

export default App
