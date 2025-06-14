import { useAuth } from "../contexts/AuthContext";

const ModalConfig = () => {
  const { handleOpenModal, configModal } = useAuth();

  return (
    <>
      <div
        onClick={(e) => {
          handleOpenModal();
        }}
        className="fixed w-full h-full bg-[#000000da]  flex items-center justify-center  z-30"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-[18rem] rounded-lg py-2 px-3"
        >
          Tema
        </div>
      </div>
    </>
  );
};

export default ModalConfig;
