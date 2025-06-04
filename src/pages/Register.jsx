import { EyeIcon, EyeOff, LockIcon, MailIcon, UserIcon } from 'lucide-react'
import Input from '../components/Global/Input'
import Button from '../components/Global/Button'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile, validatePassword } from 'firebase/auth'
import { auth } from '../services/firebase'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleRegisterUser = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("As senhas precisam ser iguais!")
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await updateProfile(user, {
                displayName: name,
            })

            if (user) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error.code)

            switch (error.code) {
                case "auth/email-already-in-use":
                    setMessage("Esse e-mail já está em uso")
                    break;
                case "auth/weak-password":
                    setMessage("A senha precisar ser inserida")
                case "auth/invalid-display-name":
                    setMessage("Insira seu nome")
                default: setMessage("Preencha todas os campos corretamente.")
                    break
            }

            return;
        }
    }

    return (
        <section className='flex flex-col min-h-screen justify-center items-center gap-4 py-6 px-5 bg-[var(--color-bg)]'>
            <h1 className='text-3xl font-bold text-[var(--color-3)]'>Crie sua conta</h1>
            <p className='text-center text-[var(--color-2)]'>Preencha os dados para usar o sistema</p>
            <form onSubmit={handleRegisterUser} className='shadow-lg w-full py-6 px-7 rounded-xl bg-white flex flex-col gap-3 my-4'>
                <Input onChange={(e) => setName(e.target.value)} type={'text'} titleName={'Nome'} iconName={<UserIcon className='text-[var(--color-2)]' />} placeholder={'Seu nome completo'} />
                <Input onChange={(e) => setEmail(e.target.value)} type={'email'} titleName={'Email'} iconName={<MailIcon className='text-[var(--color-2)]' />} placeholder={'seu@email.com'} />
                <Input onChange={(e) => setPassword(e.target.value)} type={`${showPassword ? 'text' : 'password'}`} titleName={'Senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} maxLength={6} eyeIcon={showPassword ? <EyeIcon onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' /> : <EyeOff onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' />} />
                <Input onChange={(e) => setConfirmPassword(e.target.value)} type={`${showPassword ? 'text' : 'password'}`} titleName={'Confirme sua senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} />
                <p className='text-[13px] text-red-400'>{message}</p>
                <Button className={'mt-2'}>Registrar</Button>
            </form>
            <p className='text-[.9rem]'>Já possui uma conta? <Link className='text-[var(--color-1)] font-semibold' to={'/login'}>Entrar</Link></p>
        </section>
    )
}

export default Register
