import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { ModernToaster } from "./Components/Notifications/NotificationSystem.jsx";

import router from "./Router/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ModernToaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
