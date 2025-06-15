import Button from "../components/Global/Button";
import Input from "../components/Global/Input";
import { Activity, SaveIcon } from "lucide-react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../services/firebase";

const AddRace = () => {
  const { userCredential, handleGetDataUser } = useAuth();

  const [date, setDate] = useState("");
  const [typeRace, setTypeRace] = useState("");
  const [period, setPeriod] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [isConcluded, setIsConcluded] = useState(true);

  const handleAddRace = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users", userCredential.uid, "races"), {
        date: date,
        typeRace: typeRace,
        period: period || "",
        duration: parseFloat(duration) || "",
        distance: parseFloat(distance) || "",
        calories: Number(calories || null),
        isConcluded: Boolean(isConcluded),
      });

      handleGetDataUser(userCredential);
    } catch (error) {
      console.log(error.code);
    }
  };

  const handleDurationChange = (e) => {
    // remove tudo que não for número
    let value = e.target.value.replace(/\D/g, "");

    value = value.slice(0, 6);

    if (value.length <= 2) {

      value = value;
    } else if (value.length <= 4) {

      value = value.slice(0, value.length - 2) + ":" + value.slice(-2);
    } else {

      value =
        value.slice(0, value.length - 4) +
        ":" +
        value.slice(-4, -2) +
        ":" +
        value.slice(-2);
    }

    setDuration(value);
  };

  const handleDistanceChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.slice(0, 5);

    if (value.length <= 2) {
      value = value.padStart(1);
    } else {
      value = value.slice(0, value.length - 2) + "." + value.slice(-2);
    }

    setDistance(value);
  };

  return (
    <main className="pt-22 px-4 pb-22 bg-[var(--color-bg)] min-h-screen">
      <div className="flex items-center gap-2">
        <Activity className="text-[var(--color-1)]" />
        <h1 className="text-2xl font-semibold text-[var(--color-3)]">
          Adicionar Corrida
        </h1>
      </div>
      <p className="text-[var(--color-2)] text-[14px] mb-10">
        Preencha o formulário abaixo para registrar uma nova corrida.
      </p>
      <form
        onSubmit={handleAddRace}
        className="shadow-lg w-full py-5 px-6 rounded-xl border-2 border-gray-200 bg-white flex flex-col gap-3 mb-4"
      >
        <label className="flex gap-2">
          <input
            type="checkbox"
            onChange={(e) => {
              const checked = e.target.checked;
              setIsConcluded(!checked);

              if (checked) {
                setTypeRace("");
                setPeriod("");
                setDistance("");
                setDuration("");
                setCalories("");
                setObservation("");
              }
            }}
          />
          <span className="text-[14px] text-[var(--color-2)]">
            Não corri hoje
          </span>
        </label>
        <Input
          onChange={(e) => setDate(e.target.value)}
          type={"date"}
          titleName={"Data"}
          required={true}
        />
        <div>
          <span className="text-[12px]">Tipo</span>
          <select
            value={typeRace}
            disabled={!isConcluded}
            onChange={(e) => {
              setTypeRace(e.target.value);
            }}
            className="disabled:text-transparent w-full flex text-[13px] mt-2 items-center gap-3 border border-gray-200 bg-[var(--color-bg)] focus-within:border-[var(--color-1)] rounded-lg px-2.5 py-1.5"
            required
          >
            <option value="" disabled>
              Selecionar
            </option>
            <option value="Ar livre">Ar livre</option>
            <option value="Esteira">Esteira</option>
          </select>
        </div>
        <div>
          <span className="text-[12px]">Período</span>
          <select
            value={period}
            disabled={!isConcluded}
            onChange={(e) => {
              setPeriod(e.target.value);
            }}
            className="disabled:text-transparent w-full flex text-[13px] mt-2 items-center gap-3 border border-gray-200 bg-[var(--color-bg)] focus-within:border-[var(--color-1)] rounded-lg px-2.5 py-1.5"
            required
          >
            <option value="" disabled>
              Selecionar
            </option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>
        <Input
          className="disabled:text-transparent"
          onChange={handleDistanceChange}
          type={"tel"}
          titleName={"Distância (km)"}
          value={distance}
          disabled={!isConcluded}
          placeholder={"5.0"}
          required={true}
        />
        <Input
          className="disabled:text-transparent"
          onChange={handleDurationChange}
          type={"tel"}
          titleName={"Duração"}
          value={duration}
          disabled={!isConcluded}
          placeholder={"40:00"}
          required={true}
        />
        <Input
          className="disabled:text-transparent"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
          type={"number"}
          titleName={"Calorias"}
          value={calories}
          disabled={!isConcluded}
          placeholder={"387"}
          required={true}
        />
        <Button
          className={"flex items-center justify-center gap-2 text-[13px] mt-3"}
        >
          <SaveIcon className="size-4.5" />
          Salvar corrida
        </Button>
      </form>
    </main>
  );
};

export default AddRace;
