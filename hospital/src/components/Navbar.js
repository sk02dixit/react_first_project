import React from 'react';
import './cssdata.css';
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
  <>
     <div className="container-fluid">
     <div className="row" style={{backgroundColor:'#f6f9fd', minHeight:'40px'}}>
         <div className="col-sm-1"></div>
         <div className="col-sm-3">
         <i className="fa-solid fa-envelope text-primary mt-2"></i><span className="mx-2">@infomedilinkhospital.com</span>
         </div>
         <div className="col-sm-2">
         <i className="fa-solid fa-mobile text-primary mt-2"></i><span className="mx-2">+1 5589 55488 55</span>
         </div>
         <div className="col-sm-3">
             <i className="fa-solid fa-location-dot text-primary mt-2"></i><span className="mx-2">Medilink (Ltd) , Newyork City</span>
         </div>
         <div className="col-sm-1"></div>
         
         <div className="col-sm-2">
             <div className="row">
                 <div className="col-sm-12 mt-2 text-primary">
                     <i className="fa-brands fa-instagram mx-1"></i>
                     <i className="fa-brands fa-facebook mx-1"></i>
                     <i className="fa-brands fa-twitter mx-1"></i>
                     <i className="fa-brands fa-youtube"></i>
                 </div>
             </div>
         </div>
        
     </div>
 </div>
    <div className="container-fluid sticky-top"style={{backgroundColor:'#e4eaf0'}}>
    <div className="row p-0 " style={{backgroundColor:'#e4eaf0'}}>
        <div className="col-sm-1"></div>
        <div className="col-sm-1">
            <strong style={{fontSize:'40px',color:'#2c4964',fontFamily:'gabrilla'}}>MediLink</strong>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-9 p-0">
        <nav className="navbar navbar-expand-lg" >
            <div className="container-fluid" style={{backgroundColor:'#e4eaf0'}}>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <b><ul className="navbar-nav">
                       <li className="nav-item">
                            <Link className="nav-link mx-1 Link" to="/">Home</Link>
                       </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1 Link" to="/About">About Us</Link>
                       </li>
                       <li className="nav-item">
                            <Link className="nav-link mx-1 Link" to="/Login" >User Login</Link>
                       </li>
                       {/* <li className="nav-item">
                            <Link className="nav-link mx-1" >Facilities</Link>
                       </li> */} 
                       <li className="nav-item">
                            <Link className="nav-link mx-1 Link" to="/Contact">Contact Us</Link>
                       </li>
                       {/* <li className="nav-item">
                            <Link className="nav-link mx-1" >Doctors</Link>
                       </li>
                       <li className="nav-item">
                            <Link className="nav-link mx-1" >Registration</Link>
                       </li>
                       <Link ><input type="submit" value="Admin Login" name="submit" className="btn btn-primary mx-5" style={{width:'150px'}}/></Link> */}
    
                    </ul></b>
                </div>
            </div>
        </nav>
        </div>
        
    </div>
</div>
</>
  );
}


