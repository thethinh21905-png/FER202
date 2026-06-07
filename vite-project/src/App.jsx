import { BrowserRouter, Routes, Route } from "react-router-dom";
import HorseOwnerDashboard from "./pages/HorseOwnerDashboard";
import MyHorse from "./pages/MyHorse";
import RegisterHorse from "./pages/RegisterHorse";
import MyRegistrations from "./pages/MyRegistrations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<HorseOwnerDashboard />} />
        <Route path="/my-horse" element={<MyHorse />} />
        <Route path="/register-horse" element={<RegisterHorse />} />
        <Route path="/registrations" element={<MyRegistrations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;