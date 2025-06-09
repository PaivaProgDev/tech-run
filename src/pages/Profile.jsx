import { ArrowLeftIcon, LogOutIcon, UserIcon } from "lucide-react";

import { Navigate, useNavigate } from "react-router-dom";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

const Profile = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserCredential, userCredential } = useAuth();

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
    <section className="flex flex-col items-center min-h-screen py-22 px-4 bg-[var(--color-bg)]">
      <div className="flex w-full items-center justify-between ">
        <div
          onClick={handleBackPage}
          className="cursor-pointer bg-gray-200 w-fit p-2 rounded-full"
        >
          <ArrowLeftIcon className="text-[var(--color-2)] size-4.5" />
        </div>
        <div
          onClick={handleLogOut}
          className="cursor-pointer bg-gray-200 w-fit p-2 rounded-full"
        >
          <LogOutIcon className="size-4.5 text-[var(--color-2)]" />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        {userCredential.photoURL !== null ? (
          <div className=" relative">
            <img
              className="rounded-full h-40 w-40 object-cover"
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
    </section>
  );
};

export default Profile;
