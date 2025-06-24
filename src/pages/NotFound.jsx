import { useNavigate } from 'react-router-dom'
import { AlertCircle, ArrowLeftIcon } from 'lucide-react'
import Button from '../components/Global/Button'

const NotFound = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate('/dashboard')
    }

    return (
        <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
            <AlertCircle className='size-22 text-orange-300' />
            <h1 className='text-2xl text-[var(--color-3)] font-medium'>Oops, não há nada aqui...</h1>
            <Button onClick={handleGoBack}>
                <ArrowLeftIcon className='size-4.5' />
                Voltar
            </Button>
        </div>
    )
}

export default NotFound
