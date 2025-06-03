import React from 'react'
import Logo from './Global/Logo'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
    const { userCredential } = useAuth()

    return (
        <header className='flex items-center justify-between z-10 bg-white py-3 px-4 border-b fixed top-0 w-full border-gray-300'>
            <div className='flex items-center gap-2'>
                <div className='h-8 w-8 bg-amber-500 rounded-full'></div>
                <span className='text-[13px] text-[var(--color-3)]'>Olá, {userCredential.displayName}</span>
            </div>
            <Logo />
        </header>
    )
}

export default Header
