import { MedalIcon } from "lucide-react"

const Medals = () => {
    return (
        <div className='pt-22 px-4 pb-22 bg-[var(--color-bg)] min-h-screen flex flex-col gap-10 justify-center items-center'>
            <h1 className="text-4xl font-semibold text-[var(--color-1)]">Medalhas</h1>
            <div>
                <MedalIcon className="size-22" />
                <p className="mt-6">Em breve!</p>
            </div>
        </div>
    )
}

export default Medals
