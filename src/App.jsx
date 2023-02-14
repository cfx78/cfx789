import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
