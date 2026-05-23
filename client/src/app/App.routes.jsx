import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"
import ProtectedRoute from "../guards/ProtectedRoute";
import PublicRoute from "../guards/PublicRoute";
import NotFound from "../components/common/NotFound";
import Home from "../features/main/pages/Home";
import MainPage from "../features/main/pages/MainPage";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <AuthLayout mode="login">
          <Login />
        </AuthLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute>
        <AuthLayout mode="register">
          <Register />
        </AuthLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/home",
    element: (
      <PublicRoute>
        <MainLayout />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;