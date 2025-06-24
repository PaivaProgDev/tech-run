import Logo from "./Global/Logo";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { ArrowRightIcon, UserIcon } from "lucide-react";
import { usePreference } from "../contexts/PreferenceContext";

const Header = () => {
  const { userCredential } = useAuth();
  const { theme } = usePreference()

  return (
    <header className={`${theme === 'dark' && '!bg-[#1f1f1f] border-b-0'} flex items-center justify-between z-20 bg-white py-3 px-4 border-b fixed top-0 w-full border-gray-300`}>
      <div className="flex items-center gap-3">
        {userCredential.photoURL !== null ? (
          <div className="rounded-full">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src={userCredential.photoURL}
              alt="Foto de perfil do usuário"
            />
          </div>
        ) : (
          <div className="bg-slate-300 p-1 rounded-full">
            <UserIcon className="size-6 text-[var(--color-2)]" />
          </div>
        )}
        <div>
          <pre className={`${theme === 'dark' && '!text-gray-300'} text-[14px] text-[var(--color-3)]`}>
            Olá, <strong>{userCredential.displayName}</strong>
          </pre>
          <Link
            to={"/profile"}
            className="text-[13px] font-medium text-[var(--color-2)] flex items-center gap-1"
          >
            Ver perfil
            <ArrowRightIcon className="size-4 text-[var(--color-2)]" />
          </Link>
        </div>
      </div>
      <Logo />
    </header>
  );
};

export default Header;
