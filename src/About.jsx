import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";


function About() {
  return (

 <div className="flex pt-24">
  <div className="flex flex-row items-center gap-8 max-w-4xl mx-auto">
    
    {/*Image */}

    <img
      src="IMG_4678 2.JPG"
      alt="My picture"
      className="w-48 h-auto"
    />
    {/*small about me text */}

    <div className="text-left max-w-md">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-slate-200">
        I am third-year student at Grand Valley State University pursuing a bachelor 
        of science in cybersecurity. I enjoy developing systems and learning what 
        fails them.
      </p>
    </div>

  </div>
</div>
  
    )    
}

export default About;