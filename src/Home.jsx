import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";

function App() {
  return (


    
<div 
className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-900/40">
    
    
    {/*first circle */}
      <div 
      className="absolute top-[-40px] left-[-40px] w-64 h-64 
      bg-purple-500 opacity-55 rounded-full blur-3xl">

      </div>

      {/*second circle */}
      <div 
      className="absolute bottom-[-40px] right-[-40px] w-96 h-96 
      bg-purple-500 opacity-55 rounded-full blur-3xl">

      </div>

      {/* Home content */}
      <div className="min-h-screen flex flex-col items-center justify-center gap-6" >

        <img
          src="IMG_4678 2.JPG"
          alt="My picture"
          className="w-48 h-auto"
          />
          
          <div className="text-center">
          <h1 className="text-4xl font-bold">X</h1>
          <p className="mt-4 text-white">
            x (superstar person) is a cybersecurity student at x.
          </p>
        </div>
        </div>

       

      {/* Routed pages render here */}
      <Outlet />
    
    </div>
  );
}

export default App;
