import React, { useState } from "react";

export default function Navbar (){
  const [navbar,setNavbar]=useState(false)

    
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      });
   

 return (
   <nav className={navbar ? "scrolled" : "header"}>
     <header id="navbar_top" className="scroll-header">
       <div className="navbar">
         <a href="#Home">Home</a>
         <a href="#About">About</a>
         <a href="#Skills">Skills</a>
         <a href="#Experience">Experience</a>
         <a href="#Contact">Contact</a>
       </div>
     </header>
   </nav>
 );
}