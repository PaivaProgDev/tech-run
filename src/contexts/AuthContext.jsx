import { createContext, use, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [userCredential, setUserCredential] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserCredential(user)
                setIsAuthenticated(true)
            } else {
                setUserCredential(null)
                setIsAuthenticated(false)
            }
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        setUserCredential,
        userCredential,
        loading,
        setLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)