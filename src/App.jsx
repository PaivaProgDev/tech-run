import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import AddRace from "./pages/AddRace";
import Loading from "./components/Global/Loading";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import { useAuth } from "./contexts/AuthContext";
import ModalConfig from "./components/ModalConfig";
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Historic = lazy(() => import("./pages/Historic"));
const Home = lazy(() => import("./pages/Home"));
const Medals = lazy(() => import("./pages/Medals"));

const App = () => {
  const { isAuthenticated, configModal } = useAuth();

  return (
    <main className="min-h-screen">
      {isAuthenticated && (
        <>
          <Aside />
          <Header />
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <PublicRoute>
                <Home />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <PublicRoute>
                <Login />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/add-race"
          element={
            <PrivateRoute>
              <AddRace />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/historic"
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoute>
                <Historic />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="/medals"
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoute>
                <Medals />
              </PrivateRoute>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
