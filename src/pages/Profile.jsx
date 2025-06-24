import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LayoutDashboard,
  LogOutIcon,
  MedalIcon,
  Settings2Icon,
  UserIcon,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import ModalConfig from "../components/ModalConfig";
import { usePreference } from "../contexts/PreferenceContext";
import viewPort from '../components/Global/ViewPort'

const Profile = () => {
  const {
    setIsAuthenticated,
    setUserCredential,
    userCredential,
    races,
    handleOpenModal,
    configModal,
  } = useAuth();
  const { theme, asideIsOpen } = usePreference()
  const { viewPortSize } = viewPort()
  const monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const year = new Date().getFullYear().toString().split(0, 2).slice(1, 2);
  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleLogOut = () => {
    signOut(auth);
    navigate("/login");
    setIsAuthenticated(false);
    setUserCredential(null);
  };

  const handleUpdatePhoto = async (cdnUrl) => {
    if (userCredential) {
      updateProfile(userCredential, {
        photoURL: cdnUrl,
      });

      setUserCredential({
        ...userCredential,
        photoURL: cdnUrl,
      });
    }
  };

  return (
    <>
      {configModal && <ModalConfig />}
      <section className={`${theme === 'dark' ? "bg-[#1f1f1f]" : "bg-linear-to-t from-slate-200 to-[var(--color-bg)]"} ${asideIsOpen && 'ml-49.5'} ${viewPortSize >= 640 && 'ml-14.5'} transition-all min-h-screen relative`}>
        <div className="py-22 px-4 flex flex-col items-center relative">
          <div className="flex w-full items-center justify-between z-10">
            <div
              onClick={handleBackPage}
              className="cursor-pointer bg-gray-300 w-fit p-2 rounded-full"
            >
              <ArrowLeftIcon className="text-[var(--color-3)] size-4.5" />
            </div>
            <div
              onClick={handleLogOut}
              className="cursor-pointer bg-gray-300 w-fit p-2 rounded-full"
            >
              <LogOutIcon className="size-4.5 text-[var(--color-3)]" />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            {userCredential.photoURL !== null ? (
              <div className=" relative">
                <img
                  className="rounded-full h-40 w-40 object-cover border-4 border-white"
                  src={userCredential.photoURL}
                  alt="Foto de perfil do usuário"
                />
                <FileUploaderRegular
                  sourceList="local"
                  cameraModes="photo"
                  pubkey="56aedfc665a0dce4a57b"
                  className="absolute right-0 bottom-0"
                  onCommonUploadSuccess={(e) =>
                    e.successEntries.map((entry) => {
                      handleUpdatePhoto(entry.cdnUrl);
                    })
                  }
                />
              </div>
            ) : (
              <div className="bg-slate-300 p-6 rounded-full relative">
                <UserIcon className="size-12 text-[var(--color-2)]" />
                <FileUploaderRegular
                  sourceList="local"
                  cameraModes="photo"
                  pubkey="56aedfc665a0dce4a57b"
                  className="absolute right-0 bottom-0"
                  onCommonUploadSuccess={(e) =>
                    e.successEntries.map((entry) => {
                      handleUpdatePhoto(entry.cdnUrl);
                    })
                  }
                />
              </div>
            )}
            <h1 className="text-2xl font-semibold text-[var(--color-3)] mt-5 mb-1">
              <pre>{userCredential.displayName}</pre>
            </h1>
            <pre className="text-gray-400 text-center text-[14px]">
              {userCredential.email}
            </pre>
          </div>
          <div className="flex gap-3 mt-6">
            <span className=" bg-gray-700 p-1 h-14 w-14 rounded-lg flex items-center justify-center text-2xl font-semibold text-white">
              {day}
            </span>
            <span className=" bg-gray-800 p-1 h-14 w-14 rounded-lg flex items-center justify-center text-2xl font-semibold text-white">
              {monthNumber[month]}
            </span>
            <span className=" bg-gray-700 p-1 h-14 w-14 rounded-lg flex items-center justify-center text-2xl font-semibold text-white">
              {year}
            </span>
          </div>

          <div className={`${theme === 'dark' && '!bg-neutral-800'} flex mt-8 flex-col gap-4 w-full max-w-sm bg-white py-4 px-5 rounded-xl shadow-md`}>
            <Link
              to={"/dashboard"}
              className="flex items-center gap-3 border-b border-b-gray-200 pb-2"
            >
              <div className=" w-fit p-2 rounded-full h-fit">
                <LayoutDashboard className="size-5 text-[var(--color-1)]" />
              </div>
              <div className="leading-5">
                <span className={`${theme === 'dark' && 'text-zinc-300'} text-[15px] text-[var(--color-3)] font-semibold`}>
                  Dashboard
                </span>
                <pre className="text-[13px] text-[var(--color-2)]">
                  {races.length} corridas
                </pre>
              </div>
              <div className="w-full flex justify-end">
                <ChevronRightIcon className="text-[var(--color-2)] size-5" />
              </div>
            </Link>
            <Link
              to={"/medals"}
              className="flex items-center gap-3 border-b border-b-gray-200 pb-2"
            >
              <div className=" w-fit p-2 rounded-full h-fit">
                <MedalIcon className="size-5 text-[var(--color-1)]" />
              </div>
              <div className="leading-5">
                <span className={`${theme === 'dark' && 'text-zinc-300'} text-[15px] text-[var(--color-3)] font-semibold`}>
                  Medalhas
                </span>
                <pre className="text-[13px] text-[var(--color-2)]">
                  Em breve...
                </pre>
              </div>
              <div className="w-full flex justify-end">
                <ChevronRightIcon className="text-[var(--color-2)] size-5" />
              </div>
            </Link>
            <div
              onClick={handleOpenModal}
              className="flex items-center gap-3 cursor-pointer border-b-gray-200"
            >
              <div className="w-fit p-2 rounded-full h-fit">
                <Settings2Icon className="size-5 text-[var(--color-1)]" />
              </div>
              <div className="leading-5">
                <span className={`${theme === 'dark' && 'text-zinc-300'} text-[15px] text-[var(--color-3)] font-semibold`}>
                  Configurações
                </span>
                <pre className="text-[13px] text-[var(--color-2)]">
                  Temas e privacidade
                </pre>
              </div>
              <div className="w-full flex justify-end">
                <ChevronRightIcon className="text-[var(--color-2)] size-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
