import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../images/light-bulb.png'
const Navbar = () => {
  return (
    <nav className='shadow-lg py-2 mb-4'>
    <div className='mx-10 flex flex-col md:flex-row justify-between items-center'>
      <div className="title flex items-center">
      <img className='w-12' src={logo} alt="" />
        <h1 className='mx-1 md:text-2xl'> Quiz Master </h1>
      </div>
      <div className="links">
        <NavLink to={'./home'}className={`mr-3 md:mr-4 rounded-2xl p-1 $({ isActive }) =>
              isActive ? 'active ' : undefined`
            }>Home</NavLink>
        <NavLink to={'./blog'} className='mr-3 md:mr-4 rounded-2xl p-1'>Blog</NavLink>
        <NavLink to={'./statistics'} className='rounded-2xl p-1'>Statistics</NavLink>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;