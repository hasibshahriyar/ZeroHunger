import React from "react";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Chatbot from "../Pages/Chatbot/Chatbot";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserPage/UserProfile";
import OrderStatus from "../Pages/Dashboard/UserPage/OrderStatus";
import DonorProfile from "../Pages/Dashboard/DonorPage/DonorProfile";
import AddFood from "../Pages/AddFood/AddFood";
import ManageAddedFoods from "../Pages/Dashboard/DonorPage/ManageAddedFoods";
import AdminProfile from "../Pages/Dashboard/AdminPage/AdminProfile";
import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import PrivateRouter from "./PrivateRouter";

// Create axios instance to match useAxios hook configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
import UserRouter from "./UserRouter";
import DonorRouter from "./DonorRouter";
import AdminRouter from "./AdminRouter";
import UpdateFood from "../Pages/Dashboard/DonorPage/UpdateFood";
import ManageRequestedFood from "../Pages/Dashboard/DonorPage/ManageRequestedFood";
import ManageAdminFood from "../Pages/Dashboard/AdminPage/ManageAdminFood";
import ManageUsers from "../Pages/Dashboard/AdminPage/ManageUsers";
import UserRating from "../Pages/Dashboard/UserPage/UserRating";
import AdminManageRating from "../Pages/Dashboard/AdminPage/AdminManageRating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/available",
        element: (
          <PrivateRouter>
            <AvailableFood></AvailableFood>
          </PrivateRouter>
        ),
      },

      {
        path: "/available/:category",
        element: (
          <PrivateRouter>
            <CategoryDetails></CategoryDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) => axiosInstance.get(`/foods/${params.category}`),
      },
      {
        path: "/chatbot",
        element: <Chatbot></Chatbot>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "user-profile",
        element: (
          <UserRouter>
            <UserProfile></UserProfile>
          </UserRouter>
        ),
      },
      {
        path: "user-rating",
        element: (
          <UserRouter>
            <UserRating></UserRating>
          </UserRouter>
        ),
      },
      {
        path: "order-status",
        element: (
          <UserRouter>
            <OrderStatus></OrderStatus>
          </UserRouter>
        ),
      },
      {
        path: "donor-profile",
        element: (
          <DonorRouter>
            <DonorProfile></DonorProfile>
          </DonorRouter>
        ),
      },
      {
        path: "add-food",
        element: (
          <DonorRouter>
            <AddFood></AddFood>
          </DonorRouter>
        ),
      },

      {
        path: "manage-added-foods",
        element: (
          <DonorRouter>
            <ManageAddedFoods></ManageAddedFoods>
          </DonorRouter>
        ),
      },
      {
        path: "manage-requested-foods",
        element: (
          <DonorRouter>
            <ManageRequestedFood></ManageRequestedFood>
          </DonorRouter>
        ),
      },
      {
        path: "manage-added-foods/update/:id",
        element: (
          <DonorRouter>
            <UpdateFood></UpdateFood>
          </DonorRouter>
        ),
        loader: async ({ params }) =>
          await axiosInstance.get(`/foods/single-foods/${params.id}`),
      },
      {
        path: "admin-profile",
        element: (
          <AdminRouter>
            <AdminProfile></AdminProfile>
          </AdminRouter>
        ),
      },
      {
        path: "manage-admin-food",
        element: (
          <AdminRouter>
            <ManageAdminFood></ManageAdminFood>
          </AdminRouter>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRouter>
            <ManageUsers></ManageUsers>
          </AdminRouter>
        ),
      },
      {
        path: "manage-rating",
        element: (
          <AdminRouter>
            <AdminManageRating></AdminManageRating>
          </AdminRouter>
        ),
      },
    ],
  },
]);

export default router;
