import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
// import UserPage from "./components/UserPage";
import Home from "components/Home";
import Login from "components/Login";
import SignUp from "components/SignUp";
import { action as signUpAction } from "components/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
          action: signUpAction,
        },
        {
          path: "about",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
