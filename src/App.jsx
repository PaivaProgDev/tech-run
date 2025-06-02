import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Aside from './components/Aside'

const App = () => {
    return (
        <main className='min-h-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                <Aside />
            </BrowserRouter>
        </main>
    )
}

export default App
