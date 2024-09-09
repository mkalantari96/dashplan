import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import MainPage from "./pages/mainPage/mainPage";
import NotFoundPage from "./pages/mainPage/notFoundPage";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/", element: <MainPage />, errorElement: <NotFoundPage /> },
]);
