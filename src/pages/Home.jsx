import Button from "../components/Global/Button"

const Home = () => {
    return (
        <section>
            <h1>Gerenciamento de metas calóricas</h1>
            <p>Acesse sua conta para gerenciar seus exercícios, metas calóricas e muito mais</p>
            <Button>Entrar</Button>
            <Button>Cadastrar</Button>
            <div>
                <div>
                    <h4>Interface intuitiva</h4>
                    <p>Dashboard fácil de usar com informações claras</p>
                </div>
                <div>
                    <h4>Dados em tempo real</h4>
                    <p>Atualizações imediatas sobre seus planos físicos</p>
                </div>
                <div>
                    <h4>Relatórios Detalhados</h4>
                    <p>Informações completas para decisões estratégicas</p>
                </div>
                <div>
                    <h4>Gestão Simplificada</h4>
                    <p>Controle total com mínima complexidade</p>
                </div>
            </div>
        </section>
    )
}

export default Home
