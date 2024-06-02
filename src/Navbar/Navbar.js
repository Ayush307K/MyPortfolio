
import React from "react";
import './Navbar.css';
import logo from '../Assets/Ayush.png';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faGraduationCap, faWrench, faDiagramProject, faIdCard } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="header-container">
      <header className="header">
        <img src={logo} alt="Profile Pic" className="logo" />
      </header>
      <nav className="navbar">
        <div className="nav-item">
          <FontAwesomeIcon icon={faHouse} style={{ color: '#f58a2c' }} />
          <ScrollLink to="home" smooth={true} duration={500} className="navbar-menu">Home</ScrollLink>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUser} style={{ color: '#f58a2c' }} />
        <ScrollLink to="about" smooth={true} duration={500} className="navbar-menu">About</ScrollLink>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#f58a2c' }} />
          <ScrollLink to="education" smooth={true} duration={500} className="navbar-menu">Education</ScrollLink>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faWrench} style={{ color: '#f58a2c' }} />
          <ScrollLink to="skills" smooth={true} duration={500} className="navbar-menu">Skills</ScrollLink>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faDiagramProject} style={{ color: '#f58a2c' }} />
          <ScrollLink to="projects" smooth={true} duration={500} className="navbar-menu">Projects</ScrollLink>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faIdCard} style={{ color: '#f58a2c' }} />
          <ScrollLink to="achievements" smooth={true} duration={500} className="navbar-menu">Achievements</ScrollLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;