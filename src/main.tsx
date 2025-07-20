import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import KiatuPresentation from "./pages/KiatuPresentation.tsx";
import Login from "./pages/login.tsx";
import SetupFlow from "./pages/setup.tsx";
import Dashboard from "./pages/dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KiatuPresentation />} />
        <Route path="/app" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setup" element={<SetupFlow />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
