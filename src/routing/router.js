import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import SignUpPage from "../components/SignUpPage"

const router = createBrowserRouter([
    {
        path : '/',
        element : <SignUpPage />
    },
    {
        path : '/dashboard',
        element : <Dashboard />
    },
    {
        path : '*',
        element : <h1>PAGE NOT FOUND 404</h1>
    }
])


export default router