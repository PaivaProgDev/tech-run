import { ArrowRightIcon } from "lucide-react"
import Button from "../components/Global/Button"

const Home = () => {
    return (
        <>
            <section className="flex flex-col min-h-screen justify-center items-center gap-4 py-6 px-5 bg-[var(--color-bg)]">
                <h1 className="text-2xl text-center  font-extrabold">Gerenciamento de corridas</h1>
                <p className="text-[var(--color-2)] text-center">Acesse sua conta para gerenciar seus exercícios, metas calóricas e muito mais</p>
                <div className="w-full flex gap-3 my-6">
                    <Button className={"w-full"}>Entrar</Button>
                    <Button className={"w-full"}>Cadastrar</Button>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium">Interface intuitiva</h4>
                            <p className="text-[var(--color-2)]">Dashboard fácil de usar com informações claras</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium">Dados em tempo real</h4>
                            <p className="text-[var(--color-2)]">Atualizações imediatas sobre seus planos físicos</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium">Relatórios Detalhados</h4>
                            <p className="text-[var(--color-2)]">Informações completas para decisões estratégicas</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <span className="bg-[#e5deff] p-2 rounded-xl h-fit">
                            <ArrowRightIcon className="text-[var(--color-1)] size-5" />
                        </span>
                        <div>
                            <h4 className="font-medium">Gestão Simplificada</h4>
                            <p className="text-[var(--color-2)]">Controle total com mínima complexidade</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
