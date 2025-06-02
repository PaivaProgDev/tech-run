import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Aside from './components/Aside'
import Header from './components/Header'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
    return (
        <main className='min-h-screen'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            <Aside />
        </main>
    )
}

export default App
