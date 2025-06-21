import { BicepsFlexed, Flag, Flame, ThumbsUp, ThumbsDown } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { usePreference } from '../../contexts/PreferenceContext'

const Cards = () => {
    const { races, calories, distance, isConcluded } = useAuth()
    const { theme } = usePreference()
    // Filtra as calorias que não são undefined
    const filteredCalories = calories.filter((stamp) => stamp !== undefined)
    // Filtra as distâncias que não são undefined
    const filteredDistance = distance.filter((stamp) => stamp !== undefined)

    const cards = [
        {
            id: 1,
            title: "Total de corridas",
            icon: <BicepsFlexed className='text-[#4286e9] size-4' />,
            total: races.length,
        },
        {
            id: 2,
            title: "Corridas efetuadas",
            icon: <ThumbsUp className='text-[#3a7245] size-4' />,
            total: isConcluded.filter(ref => ref === true).length,
        },
        {
            id: 3,
            title: "Corridas não efetuadas",
            icon: <ThumbsDown className='text-[#c74d4d] size-4' />,
            total: isConcluded.filter(ref => ref === false).length,
        },
        {
            id: 4,
            title: "Total de calorias",
            icon: <Flame className='text-[#c58132] size-4' />,
            total: filteredCalories.reduce((acc, values) => acc + values, 0),
        },
        {
            id: 5,
            title: "Distância (Km)",
            icon: <Flag className='text-[#7134FF] size-4' />,
            total: filteredDistance.reduce((acc, values) => acc + values, 0),
        },
    ]

    return (
        <>
            {
                cards.map(card => (
                    <div key={card.id} className={`${theme === 'dark' && '!bg-neutral-800'} sm:max-w-[20rem] flex flex-col gap-4 w-full bg-white py-4 px-5 rounded-xl shadow-md`}>
                        <div className='flex items-center justify-between'>
                            <span className={`${theme === 'dark' ? 'text-gray-400' : 'bg-white'} font-medium text-[var(--color-2)]`}>{card.title}</span>
                            <span className={`p-1.5 rounded-full ${card.id === 1 && "bg-[#d3e5fc]" || card.id === 2 && "bg-[#f1fde1]" || card.id === 3 && "bg-[#FDD3D3]" || card.id === 4 && "bg-[#fde6d3]" || card.id === 5 && "bg-[#d0c7fa]"}`}>{card.icon}</span>
                        </div>
                        <pre className={`${theme === 'dark' && 'text-gray-200'} font-extrabold text-2xl text-[var(--color-3)]`}>{card.total}</pre>
                    </div>
                ))
            }
        </>
    )
}

export default Cards
