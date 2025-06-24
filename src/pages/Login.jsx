import { EyeIcon, EyeOff, LockIcon, MailIcon } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'react-toastify'
import Input from '../components/Global/Input'
import Button from '../components/Global/Button'

const Login = () => {
    const { setIsAuthenticated, setUserCredential } = useAuth()

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSigInUser = async (e) => {

        e.preventDefault()

        if (!email || !password) {
            setMessage('Todos os campos são obrigatórios')
            return;
        }

        setLoading(true)

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            if (user) {
                setIsAuthenticated(true)
                toast.success('Bem vindo(a)')
                setUserCredential(user)
                navigate('/dashboard')
            }

            setLoading(false)
        } catch (error) {
            setLoading(false)
            switch (error.code) {
                case "auth/email-already-exists":
                    setMessage("E-mail inválido")
                    break
                case "auth/invalid-credential":
                    setMessage("E-mail ou senha incorretos")
                    break
                default: toast.error('Houve um erro, tente novamente')
                    break
            }
        }
    }

    return (
        <section className='flex flex-col min-h-screen justify-center items-center gap-4 py-6 px-5 bg-[var(--color-bg)]'>
            <h1 className='text-3xl font-bold text-[var(--color-3)]'>Bem-vindo(a)</h1>
            <p className='text-center text-[var(--color-2)]'>Entre para acessar o painel de gerenciamento</p>
            <form onSubmit={handleSigInUser} className='shadow-lg w-full py-6 px-7 rounded-xl max-w-100 bg-white flex flex-col gap-3 mb-4'>
                <Input onChange={(e) => setEmail(e.target.value)} type={'email'} titleName={'Email'} iconName={<MailIcon className='text-[var(--color-2)] ' />} placeholder={'seu@email.com'} />
                <Input onChange={(e) => setPassword(e.target.value)} type={`${showPassword ? 'text' : 'password'}`} titleName={'Senha'} iconName={<LockIcon className='text-[var(--color-2)]' />} placeholder={'••••••'} minLength={6} eyeIcon={showPassword ? <EyeIcon onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' /> : <EyeOff onClick={() => setShowPassword(!showPassword)} className='text-[var(--color-2)]' />} />
                <p className='text-[13px] text-red-400'>{message}</p>
                <Button disabled={!email || !password} className={' mt-4'}>{loading ? <div className='flex items-center justify-center gap-3'><span className="loader !w-[24px] !h-[24px]"></span><span className='font-light text-[14px]'>Aguarde...</span></div> : <span className='font-normal text-[14px]'>Entrar</span>}</Button>
            </form>
            <p className='text-[.9rem]'>Não possui uma conta? <Link className='text-[var(--color-1)] font-semibold' to={'/register'}>Registre-se</Link></p>
        </section>
    )
}

export default Login
