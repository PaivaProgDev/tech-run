import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Aside from './components/Aside'
import Header from './components/Header'
import AddRace from './pages/addRace/AddRace'
import Loading from './components/Global/Loading'
import PublicRoute from './routes/PublicRoutes'
import PrivateRoute from './routes/PrivateRoutes'
import { useAuth } from './contexts/AuthContext'
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

const App = () => {
    const { isAuthenticated } = useAuth()

    return (
        <main className='min-h-screen'>
            {
                isAuthenticated && <Aside /> && <Header />
            }
            <Routes>
                <Route path='/' element={
                    <PublicRoute>
                        <Home />
                    </PublicRoute>
                } />
                <Route path='/login' element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                <Route path='/register' element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                } />
                <Route path='/dashboard'
                    element={
                        <Suspense fallback={<Loading />}>
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        </Suspense>
                    } />
                <Route path='/add-race' element={
                    <PrivateRoute>
                        <AddRace />
                    </PrivateRoute>
                } />
            </Routes>
        </main>
    )
}

export default App
