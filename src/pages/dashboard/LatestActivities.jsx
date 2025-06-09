import { useAuth } from "../../contexts/AuthContext"

const LatestActivities = () => {

    const { races, calories, distance, isConcluded, data } = useAuth()

    return (
        <div className='flex flex-col gap-4 w-full max-w-sm bg-white py-5 px-5 rounded-xl shadow-md'>
            <h1 className='text-2xl font-semibold text-[var(--color-3)]'>Últimas atividades</h1>
            {
                data.length ? (
                    <ul>
                        {
                            data.map((doc, index) => (
                                <li key={doc.id} className="text-[14px]">
                                    {isConcluded[index] ? (
                                        <div>
                                            <span className="text-green-400 text-[16px]">Treino efetuado</span>
                                            <pre className="text-[13px] text-[var(--color-2)]">{doc.data().date}</pre>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-red-400 text-[16px]">Treino não efetuado</span>
                                            <pre className="text-[13px] text-[var(--color-2)]">{doc.data().date}</pre>
                                        </div>
                                    )}
                                </li>
                            ))}
                    </ul>
                ) : (
                    <p className="text-[12px] text-[var(--color-3)]">Você não adicionou nenhuma corrida, clique no botão <span className="text-[var(--color-1)]">"Adicionar corrida"</span></p>
                )
            }
        </div >
    )
}

export default LatestActivities
