import React from 'react'
import "./Hamburger.css"

export default function Hamburger() {
  return (
    <>
        <div class="hamburger" id="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        </div>

    <div class="sidebar" id="sidebar">
    <ul>
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#service">SERVICE</a></li>
      <li><a href="#project">PROJECTS</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
  </div>
    </>
  )
}
