import { createContext, use, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import Loading from '../components/Global/Loading';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userCredential, setUserCredential] = useState(null);
  const [loading, setLoading] = useState(true);
  const [races, setRaces] = useState([]);
  const [calories, setCalories] = useState([]);
  const [distance, setDistance] = useState([]);
  const [isConcluded, setIsConcluded] = useState([]);
  const [data, setData] = useState();
  const [configModal, setConfigModal] = useState(false);



  const handleOpenModal = () => {
    setConfigModal(!configModal);
  };

  const user = auth.currentUser;

  const handleDeleteUserInfo = async (id) => {
    const docRef = doc(db, "users", user.uid, "races", id);

    await deleteDoc(docRef);

    handleGetDataUser(user);
  };

  const handleGetDataUser = async (user) => {
    const racesData = [];
    const caloriesData = [];
    const distanceData = [];
    const isConcludedData = [];
    const idData = [];

    const queryDoc = await getDocs(collection(db, "users", user.uid, "races"));

    queryDoc.forEach((doc) => {
      idData.push(doc);
      const data = doc.data();
      racesData.push(data);
      caloriesData.push(data.calories);
      distanceData.push(data.distance);
      isConcludedData.push(data.isConcluded);
    });

    setRaces(racesData);
    setCalories(caloriesData);
    setDistance(distanceData);
    setIsConcluded(isConcludedData);
    setData(idData);

    setLoading(false);
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      if (user) {
        setIsAuthenticated(true);
        setUserCredential(user);
        handleGetDataUser(user);
      } else {
        setUserCredential(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });


    return () => unsubscribe();
  }, []);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    setUserCredential,
    userCredential,
    loading,
    setLoading,
    races,
    setRaces,
    calories,
    distance,
    isConcluded,
    handleGetDataUser,
    handleDeleteUserInfo,
    data,
    handleOpenModal,
    configModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
