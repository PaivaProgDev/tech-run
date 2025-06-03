import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Aside from './components/Aside'
import Header from './components/Header'
import AddRace from './pages/addRace/AddRace'
import Loading from './components/Global/Loading'
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

const App = () => {
    return (
        <main className='min-h-screen'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={

                    <Suspense fallback={<Loading />}>
                        <Dashboard />
                    </Suspense>
                } />
                <Route path='/add-race' element={<AddRace />} />
            </Routes>
            <Aside />
        </main>
    )
}

export default App
