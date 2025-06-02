import { BicepsFlexed, FileClock, Flag, Flame } from 'lucide-react'

const Cards = () => {
    const cards = [
        {
            id: 1,
            title: "Treinos registrados",
            icon: <BicepsFlexed className='text-[#4286e9]' />,
            total: 45
        },
        {
            id: 2,
            title: "Treinos concluídos",
            icon: <FileClock className='text-[#3a7245]' />,
            total: 12
        },
        {
            id: 3,
            title: "Total de calorias",
            icon: <Flame className='text-[#B64C4C]' />,
            total: 3500
        },
        {
            id: 4,
            title: "Distância (Km)",
            icon: <Flag className='text-[#7134FF]' />,
            total: 10.249
        },
    ]

    return (
        <>
            {
                cards.map(card => (
                    <div key={card.id} className='flex flex-col gap-4 w-full max-w-sm bg-white py-4 px-5 rounded-xl shadow-md'>
                        <div className='flex items-center justify-between'>
                            <span className='font-medium text-[var(--color-2)]'>{card.title}</span>
                            <span className={`p-1.5 rounded-full ${card.id === 1 && "bg-[#d3e5fc]" || card.id === 2 && "bg-[#f1fde1]" || card.id === 3 && "bg-[#FDD3D3]" || card.id === 4 && "bg-[#B6B4FF]"}`}>{card.icon}</span>
                        </div>
                        <pre className='font-extrabold text-2xl text-[var(--color-3)]'>{card.total}</pre>
                    </div>
                ))
            }
        </>
    )
}

export default Cards
