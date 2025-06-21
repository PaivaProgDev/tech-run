import Cards from "./Cards";
import Button from "../../components/Global/Button";
import { CirclePlus, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import LatestActivities from "./LatestActivities";
import { usePreference } from "../../contexts/PreferenceContext";

const Dashboard = () => {
  const { theme } = usePreference()

  return (
    <main className={`${theme === 'dark' && '!bg-[#1f1f1f]'} bg-[var(--color-bg)] min-h-screen relative`}>
      <div className={`${theme === 'dark' && '!bg-[#313131]'} bg-[var(--color-1)] absolute w-full h-78 -z-0 rounded-b-2xl`}></div>
      <div className="relative pt-22 px-4 pb-22">
        <div className={`flex items-center gap-2 mb-3`}>
          <Eye className="text-[#e5d5ff] size-7" />
          <h1 className="text-2xl font-semibold text-white">Visão Geral</h1>
        </div>
        <p className="text-white text-[14px]">
          Veja o estado de suas atividades
        </p>
        <Link to={"/add-race"} className="w-full flex ">
          <Button
            className={
              "flex items-center mt-10 gap-3 text-[.88rem] mb-4 bg-white !text-[var(--color-1)] font-semibold"
            }
          >
            <CirclePlus />
            Adicionar corrida
          </Button>
        </Link>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:place-self-center">
          <Cards />
        </div>
        <div className="mt-10">
          <LatestActivities />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
