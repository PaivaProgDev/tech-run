import { MedalIcon } from "lucide-react"
import { usePreference } from "../contexts/PreferenceContext"


const Medals = () => {
    const { theme } = usePreference()
    return (
        <div className={`${theme === 'dark' && '!bg-[#1f1f1f]'} pt-22 px-4 pb-22 bg-[var(--color-bg)] min-h-screen flex flex-col gap-10 justify-center items-center`}>
            <h1 className="text-4xl font-semibold text-[var(--color-1)]">Medalhas</h1>
            <div>
                <MedalIcon className={`${theme === 'dark' && 'text-zinc-300'} size-22`} />
                <p className={`${theme === 'dark' && 'text-zinc-300'} mt-6`}>Em breve!</p>
            </div>
        </div>
    )
}

export default Medals
