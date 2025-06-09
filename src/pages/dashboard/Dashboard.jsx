import Cards from './Cards'
import Button from '../../components/Global/Button'
import { CirclePlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import LatestActivities from './LatestActivities'

const Dashboard = () => {
    return (
        <main className='pt-20 px-4 pb-22 bg-[var(--color-bg)] min-h-screen'>
            <h1 className='text-3xl font-semibold text-[var(--color-3)]'>Visão Geral</h1>
            <p className='text-[var(--color-2)] mb-8'>Veja o estado de suas atividades</p>
            <Link to={'/add-race'}>
                <Button className={"flex items-center gap-3 text-[.88rem] justify-center mb-4 w-full"}>
                    <CirclePlus />
                    Adicionar corrida
                </Button>
            </Link>
            <div className='flex flex-col gap-3'>
                <Cards />
            </div>
            <div className='mt-10'>
                <LatestActivities />
            </div>
        </main>
    )
}

export default Dashboard
