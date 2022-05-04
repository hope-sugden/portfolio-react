import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
  return (
    <main className="background top"> 
       <nav className="navbar">
            <a href="#top" id="logo">HOPESUGDEN</a>
            <div id="navLinks">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            </div>
        </nav>

        <header>
            <h1>Junior Software Developer</h1>
        </header>
   </main>
  )
}

export default NavBar