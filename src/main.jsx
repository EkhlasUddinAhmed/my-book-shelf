import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import ProgressToRead from "./components/ProgressToRead/ProgressToRead.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Registration from "./components/Registration/Registration.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateToute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/progresstoread",
        element: (
          <PrivateRoute>
            <ProgressToRead></ProgressToRead>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
