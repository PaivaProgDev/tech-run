import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LatestActivities = () => {
  const { races, calories, distance, isConcluded, data } = useAuth();

  return (
    <div className="flex flex-col gap-4 w-full min-h-full max-w-sm bg-white py-5 px-5 rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold text-[var(--color-3)]">
        Últimas atividades
      </h1>
      {data?.length ? (
        <ul className="flex flex-col gap-2 max-h-[16rem] overflow-y-auto">
          {data.map((doc, index) => (
            <li key={doc.id} className="text-[14px]">
              {isConcluded[index] ? (
                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
                  <pre className="text-[13px] text-[var(--color-2)]">
                    {doc.data().date}
                  </pre>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
                  <pre className="text-[13px] text-[var(--color-2)]">
                    {doc.data().date}
                  </pre>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[12px] text-[var(--color-3)]">
          Você não adicionou nenhuma corrida, clique no botão{" "}
          <Link to={"/add-race"} className="text-[var(--color-1)]">
            "Adicionar corrida"
          </Link>
        </p>
      )}
    </div>
  );
};

export default LatestActivities;
