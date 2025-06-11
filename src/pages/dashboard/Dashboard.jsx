import Cards from './Cards'
import Button from '../../components/Global/Button'
import { CirclePlus, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import LatestActivities from './LatestActivities'

const Dashboard = () => {
    return (
        <main className='pt-22 px-4 pb-22 bg-[var(--color-bg)] min-h-screen'>
            <div className="flex items-center gap-2 mb-3">
                <Eye className="text-[var(--color-1)] size-7" />
                <h1 className='text-2xl font-semibold text-[var(--color-3)]'>Visão Geral</h1>
            </div>
            <p className='text-[var(--color-2)] text-[14px]'>Veja o estado de suas atividades</p>
            <Link to={'/add-race'}>
                <Button className={"flex items-center mt-10 gap-3 text-[.88rem] justify-center mb-4 w-full"}>
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
