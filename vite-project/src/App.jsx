import { BrowserRouter, Routes, Route } from "react-router-dom";
import HorseOwnerDashboard from "./pages/HorseOwnerDashboard";
import MyHorse from "./pages/MyHorse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<HorseOwnerDashboard />} />
        <Route path="/my-horse" element={<MyHorse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;