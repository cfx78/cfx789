import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes'

import Projects from './pages/Projects/Projects'
const router = createBrowserRouter(
    createRoutesFromElements(<Route path="*" element={<AnimatedRoutes />} />)
)
function App() {
    return <RouterProvider router={router} />
}

export default App
