import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/homePage.jsx";
import SignIn from "./routes/signIn.jsx";
import SignUp from "./routes/signUp.jsx";
import ErrorPage from "./routes/pageNotFound.jsx";
import EditEvent from "./routes/editEvent.jsx";
import CreateEvent from "./routes/createEvent.jsx";
import EventView from "./routes/eventView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: contactLoader,
      },
      {
        path: "/event/:eventId",
        element: <EventView />,
        // loader: contactLoader,
      },
      {
        path: "/event/edit/:eventId",
        element: <EditEvent />,
        // loader: contactLoader,
      },
      {
        path: "/create-event",
        element: <CreateEvent />,
        // loader: contactLoader,
      },
      {
        path: "/login",
        element: <SignIn />,
        // loader: contactLoader,
      },
      {
        path: "/signup",
        element: <SignUp />,
        // loader: contactLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
