import { EyeIcon, EyeOff, LockIcon, MailIcon, UserIcon } from 'lucide-react'
import Input from '../components/Global/Input'
import Button from '../components/Global/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <section className='flex flex-col min-h-screen justify-center items-center gap-4 py-6 px-5 bg-[var(--color-bg)]'>
            <h1 className='text-3xl font-bold text-[var(--color-3)]'>Crie sua conta</h1>
            <p className='text-center text-[var(--color-2)]'>Preencha os dados para usar o sistema</p>
            <form className='shadow-lg w-full py-6 px-7 rounded-xl bg-white flex flex-col gap-3 my-4'>
                <Input type={'text'} titleName={'Nome'} iconName={<UserIcon className='text-[var(--color-2)]' />} placeholder={'Seu nome completo'} />
                <Input type={'email'} titleName={'Email'} iconName={<MailIcon className='text-[var(--color-2)]' />} placeholder={'seu@email.com'} />
                <Input type={`${showPassword ? 'text' : 'password'}`} titleName={'Senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} maxLength={6} eyeIcon={showPassword ? <EyeIcon onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' /> : <EyeOff onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' />} />
                <Input type={`${showPassword ? 'text' : 'password'}`} titleName={'Confirme sua senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} />
                <Button className={'mt-4'}>Registrar</Button>
            </form>
            <p className='text-[.9rem]'>Já possui uma conta? <Link className='text-[var(--color-1)] font-semibold' to={'/login'}>Entrar</Link></p>
        </section>
    )
}

export default Register
