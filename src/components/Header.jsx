import React from 'react'
import Logo from './Global/Logo'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, UserIcon } from 'lucide-react'

const Header = () => {
    const { userCredential } = useAuth()

    return (
        <header className='flex items-center justify-between z-10 bg-white py-3 px-4 border-b fixed top-0 w-full border-gray-300'>
            <div className='flex items-center gap-3'>
                {
                    userCredential.photoURL !== null ?
                        <div className='rounded-full w-full max-w-[40px] flex items-center justify-center'>
                            <img className='rounded-full' src={userCredential.photoURL} alt="Foto de perfil do usuário" />
                        </div>
                        :
                        <div className='bg-slate-300 p-1 rounded-full'>
                            <UserIcon className='size-5 text-[var(--color-2)]' />
                        </div>
                }
                <div>
                    <pre className='text-[14px] text-[var(--color-3)]'>Olá, <strong>{userCredential.displayName}</strong></pre>
                    <Link to={'/profile'} className='text-[13px] font-medium text-[var(--color-2)] flex items-center gap-1'>
                        Ver perfil
                        <ArrowRightIcon className='size-4 text-[var(--color-2)]' />
                    </Link>

                </div>
            </div>
            <Logo />
        </header>
    )
}

export default Header