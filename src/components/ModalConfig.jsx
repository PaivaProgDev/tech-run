import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { usePreference } from "../contexts/PreferenceContext";

const ModalConfig = () => {
  const { handleOpenModal } = useAuth();
  const { setDark, setLight, theme } = usePreference()

  return (
    <>
      <div
        onClick={(e) => {
          handleOpenModal();
        }}
        className="fixed w-full h-full bg-[#000000da]  flex items-center justify-center px-3 z-30"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${theme === 'dark' && '!bg-neutral-800'} bg-white w-full max-w-80 rounded-lg py-6 px-4 `}
        >
          <h1 className={`${theme === 'dark' && 'text-zinc-300'} text-2xl font-medium text-[var(--color-3)]`}>
            Configurações
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <span className={`${theme === 'dark' && 'text-zinc-300'} font-medium`}>Tema</span>
            <div className="w-full flex items-center gap-5 justify-between border border-gray-300 p-2 rounded-full">
              <div onClick={setLight} className="bg-[var(--color-1)] cursor-pointer text-white py-1.5 flex-1 flex justify-center rounded-full">
                <span>
                  <SunMediumIcon className="size-5" />
                </span>
              </div>
              <div onClick={setDark} className="bg-[var(--color-1)] cursor-pointer text-white py-1.5 flex-1 flex justify-center rounded-full">
                <span>
                  <MoonIcon className="size-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConfig;
