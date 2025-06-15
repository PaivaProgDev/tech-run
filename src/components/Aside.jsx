import { HistoryIcon, LayoutDashboardIcon, Medal, Plus, PlusIcon, SettingsIcon, UserIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Global/Button'
import { usePreference } from '../contexts/PreferenceContext'

const Aside = () => {
    const [screenWidth, setScreenWidth] = useState(innerWidth)
    const { theme } = usePreference()

    useEffect(() => {
        return () => window.addEventListener('resize', setScreenWidth(innerHeight))
    })

    return (
        <aside className={`${theme === 'dark' && '!bg-[#1f1f1f] border-t-0'} fixed bottom-0 z-10 border-t border-gray-300 flex w-full ntext-[var(--color-3)] bg-white px-5 pt-4 pb-3`}>
            <nav nav className='flex justify-between w-full relative ' >
                <NavLink to={'/dashboard'} className={'flex flex-col items-center gap-1.5 '}>
                    {({ isActive }) => (
                        <>
                            <LayoutDashboardIcon className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${theme === 'dark' && 'text-white'}  size-5`} />
                            <span className={` text-[13px] opacity-0 text-[var(--color-1)] font-medium  transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"} `}>Painel</span>
                        </>
                    )}
                </NavLink>
                <NavLink to={'/historic'} className={'flex flex-col items-center gap-1.5'}>
                    {({ isActive }) => (
                        <>
                            <HistoryIcon className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${theme === 'dark' && 'text-white'} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Histórico</span>
                        </>
                    )}
                </NavLink>
                <NavLink to={'/add-race'} className={'h-fit! px-2! py-2! -translate-y-1 bg-[var(--color-1)] rounded-md text-white'}>
                    <Plus className="size-5" />
                </NavLink>
                <NavLink to={'/medals'} className={'flex flex-col items-center gap-1.5'}>
                    {({ isActive }) => (
                        <>
                            <Medal className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${theme === 'dark' && 'text-white'} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium  transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Medalhas</span>
                        </>
                    )}
                </NavLink>
                <NavLink to={'/profile'} className={'flex flex-col items-center gap-1.5'}>
                    {({ isActive }) => (
                        <>
                            <UserIcon className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${theme === 'dark' && 'text-white'} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium  transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Perfil</span>
                        </>
                    )}
                </NavLink>
            </nav >
        </aside >
    )
}

export default Aside
