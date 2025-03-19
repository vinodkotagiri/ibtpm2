import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import './NavbarComponent.css';
import logoImg from '../assets/IBT.jpg';
const NavbarComponent = () => {
 const navigate = useNavigate();
 const { drawingData } = useAppSelector(state => state.schedule);

 return (
   <nav className="navbar-container">
     <div className="navbar-left">
       <NavLink to='/' className="navbar-brand">
         <img src={logoImg} alt="IBT Logo" className="navbar-logo" />
         {/* <span className="brand-text">IBT</span> */}
       </NavLink>
     </div>

     <div className="plot-dimensions">
       <div className="dimension-input">
         <label>Length</label>
         <input 
           type="text" 
           readOnly
           value={`${drawingData?.plotLength} m (${Math.ceil(drawingData?.plotLength/0.3048)} ft)`}
         />
       </div>
       
       <div className="dimension-input">
         <label>Width</label>
         <input
           type="text"
           readOnly
           value={`${drawingData?.plotWidth} m (${Math.ceil(drawingData?.plotWidth/0.3048)} ft)`}
         />
       </div>
     </div>

     <div className="navbar-right">
       <button 
         className="schedule-btn"
         onClick={() => navigate('/schedule')}
       >
         Schedule
       </button>

       <div className="search-bar">
         <input 
           type="text" 
           placeholder="Search" 
           className="search-input"
         />
       </div>

       <div className="profile-dropdown">
         <button className="avatar-btn">
           <img 
             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
             alt="User avatar"
             className="avatar-img"
           />
         </button>

         <div className="dropdown-menu">
           <NavLink to="/dashboard/estimates" className="menu-item">
             <span>Estimates</span>
             <span className="badge">New</span>
           </NavLink>
           
           <NavLink to="/dashboard/profile" className="menu-item">
             Profile
           </NavLink>
           
           <NavLink to="/dashboard/settings" className="menu-item">
             Settings
           </NavLink>
           
           <button className="menu-item">
             Logout
           </button>
         </div>
       </div>
     </div>
   </nav>
 );
};

export default NavbarComponent;