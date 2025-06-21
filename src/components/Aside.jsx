import { ChevronLeftIcon, ChevronRightIcon, HistoryIcon, LayoutDashboardIcon, Medal, Plus, PlusIcon, SettingsIcon, UserIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Global/Button'
import { usePreference } from '../contexts/PreferenceContext'

const Aside = () => {
    const [screenWidth, setScreenWidth] = useState(innerWidth)
    const { theme, modalController, asideIsOpen } = usePreference()

    useEffect(() => {
        window.addEventListener('resize', setScreenWidth(innerHeight))
    })


    return (
        <>
            {
                screenWidth >= 654 ? (
                    <aside className={`${theme === 'dark' && '!bg-[#1f1f1f] border-r-zinc-700'} ${asideIsOpen ? 'w-[200px]' : 'w-[61.5px]'} fixed transition-all mt-16 left-0 bottom-0 top-0 z-20 border-r border-gray-300 text-[var(--color-3)] bg-white`}>
                        <nav className='flex flex-col h-full justify-between gap-5 w-full relative ' >
                            <div className='flex flex-col'>
                                <div onClick={modalController} className={`${theme === 'dark' && 'text-white'} bg-[var(--color-1)] cursor-pointer w-full px-5 pt-4 pb-3`}>
                                    <ChevronRightIcon className={`${asideIsOpen && 'rotate-180'} ${theme === 'dark' && 'text-hite'} text-white transition-all`} />
                                </div>
                                <NavLink to={'/dashboard'} className={`${!asideIsOpen && 'pointer-events-none'} relative flex items-center gap-3 px-5 pt-4 pb-3`}>
                                    {({ isActive }) => (
                                        <>
                                            <LayoutDashboardIcon className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${!asideIsOpen && '!text-zinc-700'} ${theme === 'dark' && 'text-white'}  size-5`} />
                                            <span className={`${isActive && '!text-[var(--color-1)]'} ${asideIsOpen ? 'left-13.5 ' : 'invisible'} ${theme === 'dark' && 'text-zinc-400'} absolute text-[13px] font-medium transition-opacity} `}>Painel</span>
                                        </>
                                    )}
                                </NavLink>
                                <NavLink to={'/historic'} className={`${!asideIsOpen && 'pointer-events-none'} flex items-center gap-3 px-5 pt-4 pb-3`}>
                                    {({ isActive }) => (
                                        <>
                                            <HistoryIcon className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${!asideIsOpen && '!text-zinc-700'} ${theme === 'dark' && 'text-white'} size-5`} />
                                            <span className={`${isActive && '!text-[var(--color-1)]'} ${asideIsOpen ? 'left-13.5 ' : 'invisible'} ${theme === 'dark' && 'text-zinc-400'} absolute text-[13px] font-medium transition-opacity"}`}>Histórico</span>
                                        </>
                                    )}
                                </NavLink>
                                <NavLink to={'/add-race'} className={`${!asideIsOpen && 'pointer-events-none'} flex items-center gap-3 px-5 pt-4 pb-3`}>
                                    {({ isActive }) => (
                                        <>
                                            <Plus className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${!asideIsOpen && '!text-zinc-700'} ${theme === 'dark' && 'text-white'} size-5`} />
                                            <span className={`${isActive && '!text-[var(--color-1)]'} ${asideIsOpen ? 'left-13.5 ' : 'invisible'} ${theme === 'dark' && 'text-zinc-400'} absolute text-[13px] font-medium transition-opacity"}`}>Adicionar</span>
                                        </>
                                    )}
                                </NavLink>
                                <NavLink to={'/medals'} className={`${!asideIsOpen && 'pointer-events-none'} flex items-center gap-3 px-5 pt-4 pb-3`}>
                                    {({ isActive }) => (
                                        <>
                                            <Medal className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${!asideIsOpen && '!text-zinc-700'} ${theme === 'dark' && 'text-white'} size-5`} />
                                            <span className={`${isActive && '!text-[var(--color-1)]'} ${asideIsOpen ? 'left-13.5 ' : 'invisible'} ${theme === 'dark' && 'text-zinc-400'} absolute text-[13px] font-medium transition-opacity"}`}>Medalhas</span>
                                        </>
                                    )}
                                </NavLink>
                            </div>
                            <NavLink to={'/profile'} className={`${!asideIsOpen && 'pointer-events-none'} flex items-center gap-3 px-5 pt-4 pb-5`}>
                                {({ isActive }) => (
                                    <>
                                        <UserIcon className={`${isActive && "opacity-100 !text-[var(--color-1)]"} ${!asideIsOpen && '!text-zinc-700'} ${theme === 'dark' && 'text-white'} size-5`} />
                                        <span className={`${isActive && '!text-[var(--color-1)]'} ${asideIsOpen ? 'left-13.5 ' : 'invisible'} ${theme === 'dark' && 'text-zinc-400'}  absolute text-[13px] font-medium  transition-opacity"}`}>Perfil</span>
                                    </>
                                )}
                            </NavLink>
                        </nav >
                    </aside >

                ) : (
                    <aside className={`${theme === 'dark' && '!bg-[#1f1f1f] border-t-0'} fixed bottom-0 z-10 border-t border-gray-300 flex w-full ntext-[var(--color-3)] bg-white px-5 pt-4 pb-3`}>
                        <nav className='flex justify-between w-full relative ' >
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
        </>
    )
}

export default Aside
