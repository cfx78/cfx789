import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    useLocation,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Links from './pages/Links/Links'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects/Projects'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="links" element={<Links />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
