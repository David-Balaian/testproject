import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "./pageNoteFound";
import PrivateRoute from "../components/privateRoute";
import Home from "./homePage";
import EventView from "./eventView";
import EditEvent from "./editEvent";
import CreateEvent from "./createEvent";
import PublicRoute from "../components/publicRoute";
import SignIn from "./auth/signIn";
import SignUp from "./auth/signUp";

export default createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          element: <PrivateRoute />,
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
          ]
        },
        {
          element: <PublicRoute />,
          children: [
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
          ]
        }],
    },
  ]);