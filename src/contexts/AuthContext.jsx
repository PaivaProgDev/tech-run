import { createContext, use, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import { Navigate } from "react-router-dom";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [userCredential, setUserCredential] = useState(null)
    const [loading, setLoading] = useState(true)
    const [races, setRaces] = useState([])
    const [calories, setCalories] = useState([])
    const [distance, setDistance] = useState([])

    const handleGetDataUser = async (user) => {
        const queryDoc = await getDocs(collection(db, "users", user.uid, "races"));
        queryDoc.forEach((doc) => {
            setRaces(prev => [
                ...prev,
                doc.data()
            ])

            setCalories(prev => [
                ...prev,
                doc.data().calories
            ])

            setDistance(prev => [
                ...prev,
                doc.data().distance
            ])
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserCredential(user)
                setIsAuthenticated(true)
                handleGetDataUser(user)

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
        setLoading,
        races,
        calories,
        distance,
        handleGetDataUser
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)