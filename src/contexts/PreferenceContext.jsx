import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { useAuth } from "./AuthContext";

const PreferenceContext = createContext();

export const PreferenceProvider = ({ children }) => {
    const { userCredential } = useAuth()
    const [theme, setTheme] = useState('light')

    const savePreferenceTheme = async (uid, selectedTheme) => {
        try {
            await setDoc(doc(db, 'users', uid), {
                preferences: {
                    theme: selectedTheme
                },
            })

            getPreferredThemeDb(uid)
        } catch (error) {
            console.log(error.code)
        }
    }

    const getPreferredThemeDb = async (uid) => {
        const userDoc = await getDoc(doc(db, 'users', uid))

        if (userDoc.exists()) {
            const data = userDoc.data()

            const themeDb = data?.preferences?.theme

            if (themeDb) setTheme(themeDb)
            else console.warn('Doc não ecnontrado')
        }
    }

    // Trocar tema manualmente
    const setDark = () => {
        if (userCredential) savePreferenceTheme(userCredential.uid, 'dark');
    };

    const setLight = () => {
        if (userCredential) savePreferenceTheme(userCredential.uid, 'light');
    };

    useEffect(() => {
        if (userCredential) {
            getPreferredThemeDb(userCredential.uid)
        }

    }, [getPreferredThemeDb])

    const value = { setDark, setLight, theme, getPreferredThemeDb };

    return <PreferenceContext.Provider value={value}>{children}</PreferenceContext.Provider>;
};

export const usePreference = () => useContext(PreferenceContext);
