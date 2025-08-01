import { EyeIcon, EyeOff, LockIcon, MailIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../services/firebase'
import { toast } from 'react-toastify'
import Input from '../components/Global/Input'
import Button from '../components/Global/Button'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const handleRegisterUser = async (e) => {
        e.preventDefault()

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/

        if (!strongPasswordRegex.test(password)) {
            return setMessage('A senha deve conter ao menos 6 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.')
        }

        if (password !== confirmPassword) {

            return setMessage('As senhas precisam ser iguais!')
        }

        if (!isValid) {
            setMessage('Credenciais de e-mail inválidas')
        }

        if (!name || !email || !password || !confirmPassword) {
            setMessage("Todos os campos são obrigatórios")
            return;
        }

        setLoading(true)
        setMessage('')

        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await signOut(auth)

            await updateProfile(user, {
                displayName: name,
            })

            toast.success('Conta criada com sucesso!')

            navigate('/login')

        } catch (error) {
            setLoading(false)

            switch (error.code) {
                case "auth/email-already-in-use":
                    setMessage("Esse e-mail já está em uso")
                    break;
                case "auth/weak-password":
                    setMessage("A senha precisa ter pelo ao menos 6 caracteres")
                    break
                case "auth/invalid-display-name":
                    setMessage("Insira seu nome")
                default: toast.error('Houve um erro, tente novamente!')
                    break
            }
        }
    }

    return (
        <section className='flex flex-col min-h-screen justify-center items-center gap-4 py-6 px-5 bg-[var(--color-bg)]'>
            <h1 className='text-3xl font-bold text-[var(--color-3)]'>Crie sua conta</h1>
            <p className='text-center text-[var(--color-2)]'>Preencha os dados para usar o sistema</p>
            <form onSubmit={handleRegisterUser} className='shadow-lg w-full py-6 max-w-100 px-7 rounded-xl bg-white flex flex-col gap-3 my-4'>
                <Input onChange={(e) => {
                    setName(e.target.value)
                    setMessage('')
                }} type={'text'} titleName={'Nome'} iconName={<UserIcon className='text-[var(--color-2)]' />} placeholder={'Nome e sobrenome'} />
                <Input onChange={(e) => {
                    setEmail(e.target.value)
                    setIsValid(emailRegex.test(e.target.value))
                    setMessage('')
                }} type={'email'} titleName={'Email'} iconName={<MailIcon className='text-[var(--color-2)]' />} placeholder={'seu@email.com'} />
                <Input onChange={(e) => {
                    setPassword(e.target.value)
                    setMessage('')
                }} type={`${showPassword ? 'text' : 'password'}`} titleName={'Senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} eyeIcon={showPassword ? <EyeIcon onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' /> : <EyeOff onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' />} />
                <Input onChange={(e) => {
                    setConfirmPassword(e.target.value)
                }} type={`${showPassword ? 'text' : 'password'}`} titleName={'Confirme sua senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} />
                <p className='text-[13px] text-red-400'>{message}</p>
                <Button disabled={name.length <= 2 || !email || !password || confirmPassword !== password} className={'mt-4'}>{loading ? <div className='flex items-center justify-center gap-3'><span className="loader !w-[24px] !h-[24px]"></span><span className='font-light text-[14px]'>Aguarde...</span></div> : <span className='font-normal text-[14px]'>Cadastrar</span>}</Button>
            </form>
            <p className='text-[.9rem]'>Já possui uma conta? <Link className='text-[var(--color-1)] font-semibold' to={'/login'}>Entrar</Link></p>
        </section>
    )
}

export default Register
