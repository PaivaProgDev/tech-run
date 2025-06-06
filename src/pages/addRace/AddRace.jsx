import Button from '../../components/Global/Button'
import { Activity, CirclePlus, SaveIcon } from 'lucide-react'
import Input from '../../components/Global/Input'
import { useState } from 'react'

const AddRace = () => {
    const [date, setDate] = useState('')
    const [typeRace, setTypeRace] = useState('')
    const [distance, setDistance] = useState(0)
    const [duration, setDuration] = useState(0)
    const [calories, setCalories] = useState(0)
    const [observation, setObservation] = useState('')

    const handleAddRace = () => {

    }

    return (
        <main className='pt-24 px-4 pb-22 bg-[var(--color-bg)] min-h-screen'>
            <div className='flex items-center gap-4'>
                <Activity className='text-[var(--color-1)]' />
                <h1 className='text-2xl font-semibold text-[var(--color-3)]'>Adicionar Corrida</h1>
            </div>
            <p className='text-[var(--color-2)] mb-8 mt-3'>Preencha o formulário abaixo para registrar uma nova corrida.</p>
            <form onSubmit={handleAddRace} className='shadow-lg w-full py-5 px-6 rounded-xl border-2 border-gray-200 bg-white flex flex-col gap-3 mb-4'>
                <Input type={'date'} titleName={'Data'} placeholder={'seu@email.com'} />
                <div>
                    <span className='text-[12px]'>Tipo</span>
                    <select className="w-full flex text-[13px] mt-2 items-center gap-3 border border-gray-200 bg-[var(--color-bg)] focus-within:border-[var(--color-1)] rounded-lg px-2.5 py-1.5">
                        <option value="corrida">Ar livre</option>
                        <option value="caminhada">Esteira</option>
                    </select>
                </div>
                <Input type={'number'} titleName={'Distância (km)'} placeholder={'5.0'} />
                <Input type={'number'} titleName={'Duração'} placeholder={'40:00'} />
                <Input type={'number'} titleName={'Calorias'} placeholder={'387'} />
                <Input type={'text'} titleName={'Observações da corrida'} placeholder={'(opcional)'} />
                <Button className={"flex items-center justify-center gap-2 text-[13px] mt-3"}>
                    <SaveIcon className='size-4.5' />
                    Salvar corrida
                </Button>
            </form>
        </main>
    )
}

export default AddRace
