import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import NewsFeed from "../Pages/NewsFeed/NewsFeed";
import Notification from "../Pages/Notification/Notification";

import Network from "../Pages/Network/Network";
import MyConnections from "../Pages/Network/MyConnections/MyConnections";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Jobs from "../Pages/Jobs/Jobs";
import JobDetails from "../Pages/Jobs/JobDetails/JobDetails";
import Hire from "../Pages/Hire/Hire";
import AddJob from "../Pages/Hire/AddJob/AddJob";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MyJobPost from "../Pages/Hire/MyJobPost/MyJobPost";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/newsfeed",
        element: <NewsFeed></NewsFeed>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
      },
      {
        path: "/job/:email",
        element: <MyJobPost></MyJobPost>,
        loader: ({params}) => fetch(`http://localhost:5000/job/${params.email}`)
      },
      {
        path: "/hire",
        element: <Hire></Hire>,
      },
      {
        path: "/addajob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/network",
        element: <Network></Network>,
      },
      {
        path: "/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/myconnections",
        element: <MyConnections></MyConnections>,
      },
      {
        path: "/*",
        element: <Pictures></Pictures>
      },
      {
        path: '/animation',
        element: <Animation></Animation>
      },
      {
        path: '/photo',
        element: <Photo></Photo>
      },
    ],
  },
]);
export default router;
