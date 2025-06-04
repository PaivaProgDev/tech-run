import { ArrowLeftIcon, LogOutIcon } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import PerfilImage from '../assets/images/perfil.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext'

const Perfil = () => {
    const navigate = useNavigate()
    const { setIsAuthenticated, setUserCredential, userCredential } = useAuth()

    const handleBackPage = () => {
        navigate(-1)
    }

    const handleLogOut = () => {
        signOut(auth);
        <Navigate to={'/login'} />
        setIsAuthenticated(false)
        setUserCredential(null)
    }

    return (
        <section className='flex flex-col items-center min-h-screen py-22 px-4 bg-[var(--color-bg)]'>
            <div className='flex w-full items-center justify-between '>
                <div onClick={handleBackPage} className='cursor-pointer bg-gray-200 w-fit p-2 rounded-full'>
                    <ArrowLeftIcon className='text-[var(--color-2)] size-4.5' />
                </div>
                <div onClick={handleLogOut} className='cursor-pointer bg-gray-200 w-fit p-2 rounded-full'>
                    <LogOutIcon className='size-4.5 text-[var(--color-2)]' />
                </div>
            </div>
            <div className='mt-10 flex flex-col items-center'>
                <div className='w-full max-w-30'>
                    <img className='rounded-full' src={PerfilImage} alt="Foto de perfil do usuário" />
                </div>
                <h1 className='text-2xl font-semibold text-[var(--color-3)] mt-5 mb-1'>
                    <pre>{userCredential.displayName}</pre>
                </h1>
                <pre className='text-gray-400 text-center text-[14px]'>
                    gui@gmail.com
                </pre>
            </div>
        </section>
    )
}

export default Perfil
