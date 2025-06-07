import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Global/Button'
import { ArrowLeftIcon } from 'lucide-react'

const NotFound = () => {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
            <h1>Página não encontrada</h1>
            <Button onClick={handleGoBack}>
                <ArrowLeftIcon className='size-4.5' />
                Voltar
            </Button>
        </div>
    )
}

export default NotFound
