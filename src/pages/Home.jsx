import { ArrowRightIcon } from "lucide-react"
import Button from "../components/Global/Button"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useEffect } from "react"
import Loading from "../components/Global/Loading"

const Home = () => {
    const { loading, setLoading, userCredential } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && userCredential) {
            navigate('/dashboard')
        }

    }, [userCredential, loading])

    if (loading) {
        return <Loading />;
    }


    return (
        <>
            <section className="flex flex-col min-h-screen justify-center items-center gap-4 py-6 px-5 bg-[var(--color-bg)]">
                <h1 className="text-3xl text-center text-[var(--color-3)]  font-extrabold">Gerencidor de corridas</h1>
                <p className="text-[var(--color-2)] text-center">Acesse sua conta para gerenciar seus exercícios, metas calóricas e muito mais</p>
                <div className="w-full flex gap-3 my-6">
                    <Link to={"/login"} className="w-full">
                        <Button className={"w-full"}>Entrar</Button>
                    </Link>
                    <Link to={'/register'} className="w-full">
                        <Button className={"w-full"}>Cadastrar</Button>
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4 bg-white p-4 rounded-xl">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium w-full text-[var(--color-3)] text-[15.5px]">Interface intuitiva</h4>
                            <p className="text-[var(--color-2)] text-[14px]">Dashboard fácil de usar com informações claras</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-4 rounded-xl">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium w-full text-[var(--color-3)] text-[15.5px]">Dados em tempo real</h4>
                            <p className="text-[var(--color-2)] text-[14px]">Atualizações imediatas sobre seus planos físicos</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-4 rounded-xl">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium w-full text-[var(--color-3)] text-[15.5px]">Relatórios Detalhados</h4>
                            <p className="text-[var(--color-2)] text-[14px]">Informações completas para decisões estratégicas</p>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-white p-4 rounded-xl">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium w-full text-[var(--color-3)] text-[15.5px]">Gestão Simplificada</h4>
                            <p className="text-[var(--color-2)] text-[14px]">Controle total com mínima complexidade</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
