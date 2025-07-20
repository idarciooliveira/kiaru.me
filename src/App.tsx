import { Routes, Route, BrowserRouter } from "react-router";
import Login from "./pages/login.tsx";
import SetupFlow from "./pages/setup.tsx";
import Dashboard from "./pages/dashboard.tsx";
import PortfolioPreview from "./pages/preview.tsx";
import { LanguageProvider } from "./context/i18n";
import Home from "./pages/home.tsx";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<PortfolioPreview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setup" element={<SetupFlow />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
