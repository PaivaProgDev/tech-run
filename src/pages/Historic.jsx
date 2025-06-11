import { Calendar, Flame, History, PenBox, Timer, Trash, CirclePlus } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"
import ViewPort from "../components/Global/ViewPort"
import { Link } from "react-router-dom"
import Button from "../components/Global/Button"


const Historic = () => {
    const { races, data, handleDeleteUserInfo } = useAuth()
    const { viewPortSize } = ViewPort()

    const verifyStyleTable = (data) => {
        if (data === "Manhã") {
            return "bg-[#D3E5FC] flex justify-center w-full text-[11px] text-[#3788FF] border-blue-200 border-2 rounded-full px-2 sm:max-w-[5rem]"
        }

        if (data === "Tarde") {
            return "bg-[#fceca7] flex justify-center w-full text-[11px] text-[#f58c14] border-orange-200 border-2 rounded-full px-2 sm:max-w-[5rem]"
        }

        if (data === "Noite") {
            return "bg-slate-700 flex  justify-center w-full text-[11px] text-[#f58c14] border-slate-500 border-2 rounded-full px-2 sm:max-w-[5rem]"
        }

        if (data === "Esteira") {
            return "bg-[#fceca7] flex justify-center w-full text-[11px] text-[#f58c14] border-orange-200 border-2 rounded-full px-2 sm:max-w-[5rem]"
        }

        if (data === "Ar livre") {
            return "bg-[#fceca7] flex justify-center w-full text-[11px] text-[#f58c14] border-orange-200 border-2 rounded-full px-2 sm:max-w-[5rem]"
        }
    }

    return (
        <main className='pt-22 px-4 pb-22 bg-[var(--color-bg)] min-h-screen'>
            <div className="flex items-center gap-2 mb-3">
                <History className="text-[var(--color-1)] size-7" />
                <h1 className='text-2xl font-semibold text-[var(--color-3)]'>Histórico</h1>
            </div>
            <p className="text-[var(--color-2)] text-[14px]">Visualize e grencie suas corridas e atividades</p>

            <Link to={'/add-race'}>
                <Button className={"flex items-center mt-10 gap-3 text-[.88rem] justify-center mb-4 w-full"}>
                    <CirclePlus />
                    Adicionar corrida
                </Button>
            </Link>
            {
                viewPortSize >= 824 ? (
                    <div className="className='shadow-lg w-full mt-10 py-5 px-6 rounded-xl border-2 border-gray-200 bg-white flex flex-col mb-4">
                        <div>
                            <h2 className="text-[18px] font-medium text-[var(--color-3)]">Seu histórico de corridas</h2>
                        </div>
                        <pre className="text-[var(--color-2)] text-[16px] mt-1">Total de {races.length} corridas</pre>
                        <table className="border-collapse w-full mt-6 text-[var(--color-3)]">
                            <thead >
                                <tr>
                                    <th className="border text-start  px-3 py-2 text-[13px] border-gray-200">
                                        Status
                                    </th>
                                    <th className="border text-start  px-3 py-2 text-[13px] border-gray-200">
                                        Data
                                    </th>
                                    <th className="border text-start px-3 py-2 text-[13px] border-gray-200">
                                        Calorias
                                    </th>
                                    <th className="border text-start px-3 py-2 text-[13px] border-gray-200">
                                        Distância (km)
                                    </th>
                                    <th className="border text-start px-3 py-2 text-[13px] border-gray-200">
                                        Duração
                                    </th>
                                    <th className="border text-start px-3 py-2 text-[13px] border-gray-200">
                                        Periodo
                                    </th>
                                    <th className="border text-start px-3 py-2 text-[13px] border-gray-200">
                                        Tipo
                                    </th>
                                    <th className="border text-start px-3 py-2 text-[13px] border-gray-200">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && (
                                        data.map((info) => (
                                            <tr key={info.id} >
                                                <td className="border px-3 py-2 text-[13px] border-gray-200">
                                                    {info.data().isConcluded ? <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div> : <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>}
                                                </td>
                                                <td className="border px-3 py-2 text-[13px] border-gray-200">{info.data().date}</td>
                                                <td className="border px-3 py-2 text-[13px] border-gray-200">{info.data().calories}</td>
                                                <td className="border px-3 py-2 text-[13px] border-gray-200">{info.data().distance}</td>
                                                <td className="border px-3 py-2 text-[13px] border-gray-200">{info.data().duration}</td>
                                                <td className="border px-3 py-2 font-medium border-gray-200">
                                                    <span className={`${verifyStyleTable(info.data().period)}`}>{info.data().period}</span>
                                                </td>
                                                <td className="border px-3 py-2 font-medium border-gray-200 ">
                                                    <span className={verifyStyleTable(info.data().typeRace)}>{info.data().typeRace}</span>
                                                </td>
                                                <td className="border px-3 py-2 text-[13px] border-gray-200">

                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className=" flex flex-col gap-4">
                        <pre className="text-[var(--color-2)] text-[16px]">Total de {races.length} corridas</pre>
                        <div className="flex flex-col gap-4">
                            {
                                data ? (
                                    data.map((info) => (
                                        <div key={info.id} className="w-full flex justify-center">
                                            {
                                                info.data().isConcluded ? (
                                                    <div className={` p-4 border-2 border-gray-200 rounded-md bg-white w-full flex flex-col max-w-[22rem] shadow-md`}>
                                                        <div className="flex justify-between">
                                                            {info.data().isConcluded ? <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div> : <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>}
                                                            <Trash onClick={() => handleDeleteUserInfo(info.id)} className="size-5 text-[var(--color-1)]" />
                                                        </div>
                                                        <div className="text-center">
                                                            <pre className="font-semibold mt-3 text-[var(--color-3)]">{info.data().distance} km</pre>
                                                        </div>
                                                        <div className="flex gap-3 justify-center text-center mt-4">
                                                            <span className={verifyStyleTable(info.data().typeRace)}>{info.data().typeRace}</span>
                                                            <span className={verifyStyleTable(info.data().period)}>{info.data().period}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2 justify-center text-center mt-4">
                                                            <div className="flex gap-4">
                                                                <span className="flex items-center gap-2 text-[var(--color-2)]">
                                                                    <Calendar className="size-4" />
                                                                    <span className="text-[14px]">Data:</span>
                                                                </span>
                                                                <pre className="text-[14px]">{info.data().date}</pre>
                                                            </div>
                                                            <div className="flex gap-4">
                                                                <span className="flex items-center gap-2 text-[var(--color-2)]">
                                                                    <Flame className="size-4" />
                                                                    <span className="text-[14px]">Calorias:</span>
                                                                </span>
                                                                <pre className="text-[14px]">{info.data().calories}</pre>
                                                            </div>
                                                            <div className="flex gap-4">
                                                                <span className="flex items-center gap-2 text-[var(--color-2)]">
                                                                    <Timer className="size-4" />
                                                                    <span className="text-[14px]">Duração:</span>
                                                                </span>
                                                                <pre className="text-[14px]">{info.data().duration}</pre>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={`p-4 rounded-md border-2 border-gray-200 bg-white w-full flex flex-col max-w-[22rem] shadow-md`}>
                                                        <div className="flex justify-between">
                                                            {info.data().isConcluded ? <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div> : <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>}
                                                            <Trash onClick={() => handleDeleteUserInfo(info.id)} className="size-5 text-[var(--color-1)]" />
                                                        </div>
                                                        <div className="w-full items-center justify-center mt-3">
                                                            <p className="text-[14px] text-[var(--color-2)]">Corrida não efetuada</p>
                                                            <pre className="text-[14px] text-[var(--color-2)]">{info.data().date}</pre>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                ) : (
                                    <p>Nada registrado...</p>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </main >
    )
}

export default Historic
