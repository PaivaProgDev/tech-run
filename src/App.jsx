import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Aside from './components/Aside'
import Header from './components/Header'
import AddRace from './pages/addRace/AddRace'
import Loading from './components/Global/Loading'
import PublicRoute from './routes/PublicRoutes'
import PrivateRoute from './routes/PrivateRoutes'
import { useAuth } from './contexts/AuthContext'
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Perfil = lazy(() => import('./pages/Perfil'))
const Login = lazy(() => import('./pages/Login'))

const App = () => {
    const { isAuthenticated } = useAuth()

    return (
        <main className='min-h-screen'>
            {
                isAuthenticated && (
                    <>
                        <Aside />
                        <Header />
                    </>
                )
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
                <Route path='/perfil' element={
                    <Suspense fallback={<Loading />}>
                        <PrivateRoute>
                            <Perfil />
                        </PrivateRoute>
                    </Suspense>
                } />
            </Routes>
        </main>
    )
}

export default App
