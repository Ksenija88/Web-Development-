import {Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br 
    from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;