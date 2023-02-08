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
import AntiFraudTips from "../Pages/Jobs/AntiFraudTips/AntiFraudTips";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Animation from "../Pages/SignUp/Animation/Animation";
import Pictures from "../Pictures/Pictures";
import Photo from "../Pages/SignUp/Animation/Photo/Photo";
import MyJobPost from "../Pages/Hire/MyJobPost/MyJobPost";
import Courses from "../Pages/Courses/Courses";
import PrivateRoute from "../Routes/PrivateRoute";
import CandidateProfile from "../Pages/Hire/CandidateProfile/CandidateProfile";

import Quiz from "../Pages/Quiz/Quiz";
import SingleCourse from "../Pages/Courses/SingleCourse";

import FriendRequest from "../Pages/Network/FriendRequest/FriendRequest";
import FriendRequestDetails from "../Pages/Network/FriendRequistDetails/FriendRequestDetails";
import Friend from "../Pages/Network/Friend/Friend";

import DasBoardLayout from "../Outlet/DasBoardLayout";
import Jobseeker from "../Pages/Dashboard/Jobseeker/Jobseeker";
import Recruiter from "../Pages/Dashboard/Recruiter/Recruiter";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Question from "../Pages/Question/Question";






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/newsfeed",

        element: (
          <PrivateRoute>
            <NewsFeed></NewsFeed>
          </PrivateRoute>
        ),

        

      },
      {
        path: "/jobs",
        element: (
          <PrivateRoute>
            <Jobs></Jobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "/jobs/:email",
        element: (
          <PrivateRoute>
            <MyJobPost></MyJobPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/antifraudtips",
        element: (
          <PrivateRoute>
            <AntiFraudTips></AntiFraudTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/hire",
        element: (
          <PrivateRoute>
            <Hire></Hire>
          </PrivateRoute>
        ),
      },
      {
        path: "/candidate/:id",
        element: <CandidateProfile></CandidateProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/candidate/${params.id}`),
      },
      {
        path: "/course",
        element: <Courses></Courses>,
      },
      
      {
        path: "/quiz",
        loader: async () => {
          return fetch(' https://openapi.programming-hero.com/api/quiz')
        },
        element: <Quiz></Quiz>,
      },
      {
        path: '/post/:postId',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.postId}`)
        },
        element: <Question></Question>
      },
      {
        path: "/addajob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Network></Network>
          </PrivateRoute>
        ),
      },
      {
        path: "/friendrequest",
        element: (
          <PrivateRoute>
            <FriendRequest></FriendRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/receivedrequest/:email",
        element: (
          <PrivateRoute>
            <FriendRequestDetails></FriendRequestDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/receivedrequest/${params.email}`),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoute>
            <Notification></Notification>
          </PrivateRoute>
        ),
      },
      {
        path: "/myconnections",
        element: (
          <PrivateRoute>
            <MyConnections></MyConnections>
          </PrivateRoute>
        ),
      },
      {
        path: "/myfriend/:id",
        element: <PrivateRoute><Friend></Friend></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/myfriend/${params.id}`)
      },
      // {
      //   path: "/*",
      //   element: <Pictures></Pictures>
      // },
      {
        path: "/animation",
        element: (
          <PrivateRoute>
            <Animation></Animation>
          </PrivateRoute>
        ),
      },
      {
        path: "/photo",
        element: <Photo></Photo>,
      },
    ],
  },
  {
    path: "*",

    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: <DasBoardLayout></DasBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/jobSeeker/:id",
        element: <Jobseeker></Jobseeker>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/buyerseller/${params.id}`),
      },
      {
        path: "/dashboard/recruiter/:id",
        element: <Recruiter></Recruiter>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/buyerseller/${params.id}`),
      },
    ],
  },

 

]);
export default router;
