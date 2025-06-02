import { HistoryIcon, LayoutDashboardIcon, PlusIcon, SettingsIcon, UserIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
    const [screenWidth, setScreenWidth] = useState(innerWidth)

    useEffect(() => {
        return () => window.addEventListener('resize', setScreenWidth(innerHeight))
    })

    return (
        <aside className='fixed bottom-0 border-t border-gray-300 flex w-full ntext-[var(--color-3)] bg-white px-5 pt-4 pb-2'>
            <nav className='flex justify-between w-full'>
                <NavLink to={'/dashboard'} className={'flex flex-col items-center gap-1.5 '}>
                    {({ isActive }) => (
                        <>
                            <LayoutDashboardIcon className={`${isActive && "opacity-100 text-[var(--color-1)]"} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium  transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Dashboard</span>
                        </>
                    )}
                </NavLink>
                <NavLink to={'/historic'} className={'flex flex-col items-center gap-1.5'}>
                    {({ isActive }) => (
                        <>
                            <HistoryIcon className={`${isActive && "opacity-100 text-[var(--color-1)]"} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Histórico</span>
                        </>
                    )}
                </NavLink>
                <NavLink to={'/option'} className={'flex flex-col items-center gap-1.5'}>
                    {({ isActive }) => (
                        <>
                            <SettingsIcon className={`${isActive && "opacity-100 text-[var(--color-1)]"} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium  transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Opções</span>
                        </>
                    )}
                </NavLink>
                <NavLink to={'/perfil'} className={'flex flex-col items-center gap-1.5'}>
                    {({ isActive }) => (
                        <>
                            <UserIcon className={`${isActive && "opacity-100 text-[var(--color-1)]"} size-5`} />
                            <span className={`text-[13px] opacity-0 font-medium  transition-opacity ${isActive && "opacity-100 text-[var(--color-1)]"}`}>Perfil</span>
                        </>
                    )}
                </NavLink>
            </nav>
        </aside >
    )
}

export default Aside
