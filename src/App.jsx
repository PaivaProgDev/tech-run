import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import Aside from './components/Aside'
import Header from './components/Header'
import AddRace from './pages/addRace/AddRace'
import Loading from './components/Global/Loading'
import PublicRoute from './routes/PublicRoutes'
import PrivateRoute from './routes/PrivateRoutes'
import { useAuth } from './contexts/AuthContext'
// import NotFound from './pages/NotFound'
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const NotFound = lazy(() => import('./pages/NotFound'))



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
                    <Suspense fallback={<Loading />}>
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    </Suspense>
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
                <Route path='/profile' element={
                    <Suspense fallback={<Loading />}>
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    </Suspense>
                } />
                <Route path='*' element={
                    <Suspense fallback={<Loading />}>
                        <PublicRoute>
                            <NotFound />
                        </PublicRoute>
                    </Suspense>
                } />
            </Routes>
        </main>
    )
}

export default App
