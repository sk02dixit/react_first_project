import React from 'react'
import Navbar from'../components/Navbar';
import Futer from'../components/Futer';
import './cssdata.css';
import img1 from './img/aa.png';
import img2 from './img/about.jpg';

export default function About() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 imgslid" style={{backgroundSize:'cover',height:'300px'}}>
            <h1 className="text-center mt-5 text-primary" style={{fontSize:'60px',fontFamily:'gabrilla'}}>About Us</h1>
            <h5 className="text-center"> <span className="text-primary">Home</span> News</h5>
        </div>
        </div>
    </div>
    {/* <!-----------------About-doctor-----------> */}
    <div className="container">
        <div className="row mt-5">
        <div className="col-sm-12">
                <h1 className="text-center text-secondary"  style={{fontFamily:'gabrilla',borderRadius:'10px'}}><span className="text-secondary">About
    </span>Us</h1>
            </div>
            <div className="row">
               <div className="col-sm-5"></div>
               <div className="col-sm-2"><hr style={{border:'2px solid #0d6efd',marginTop:'-5px',marginLeft:'30px',borderRadius:'10%'}}/></div>
               <div className="col-sm-5"></div>
            </div>
        </div>
       </div>
    {/* // <!------------------About Content------------> */}
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
                <img src={img1} width="100%" height="550px"/>
            </div>
            <div className="col-sm-6">
            <h1 className="mx-5 mt-5" style={{fontSize:'45px'}}><span className="text-primary">Medilink </span>Hospitals</h1>
                    <h4  className="mx-5">Multispeciality Hospitals</h4>
                    <p className="mx-5" style={{textAlign:'justify'}}>We started our journey since 2002 and thus state with pride and gratitude that we have completed two decades of journey successfully. Our team at Medilink Multispecialty Hospitals consists of specialists & Super specialists from all Branches. We are serving from two branches in Ahmedabad- Satellite & Sabarmati. Both the units are state-of-art multi-speciality hospital set ups situated at strategic locations, and have all required departments/facilities. Apart from this, we also have 24 *7 Radiology, pathology & In-house Pharmacy services.</p><br/>
                    <p className="mx-5"style={{textAlign:'justify'}}>One of our major speciality, is being run under the banner of Medilink Diabetes Clinics, and headed by the Diabetic & Metabolic Physician and Diabetologist Dr. Manish Agarwal. We, at Medilink Diabetes Clinic are dedicated to delivering world-class care and management of diabetes and related metabolic disorders.</p>
            </div>
        </div>
    </div>
    {/* <!---------------About Doctor 2--------------> */}
         <div className="container-fluid">
            <div className="row">
            <div className="col-sm-6">
            <h1 className="mx-5 mt-5" style={{fontSize:'45px'}}><span className="text-primary">Manish </span>Agrawal</h1>
                    <h4  className="mx-5">Director</h4>
                    <h5 className="mx-5">Medilink hospital</h5>
                    <p className="mx-5" style={{textAlign:'justify'}}>One of our major speciality, is being run under the banner of Medilink Diabetes Clinics, and headed by the Diabetic & Metabolic Physician and Diabetologist Dr. Manish Agarwal. We, at Medilink Diabetes Clinic are dedicated to delivering world-class care and management of diabetes and related metabolic disorders.</p><br/>
                    <p className="mx-5"style={{textAlign:'justify'}}>One of our major speciality, is being run under the banner of Medilink Diabetes Clinics, and headed by the Diabetic & Metabolic Physician and Diabetologist Dr. Manish Agarwal. We, at Medilink Diabetes Clinic are dedicated to delivering world-class care and management of diabetes and related metabolic disorders.</p>
            </div>
                <div className="col-sm-6">
                    <img src={img2} className="mx-4"width="90%" height="550px;"/>
                </div>
                
            </div>
         </div>
         {/* <!------------------Informations-----------> */}
         <div className="container-fluid">
            <div className="row mt-5" style={{backgroundColor:'#f1f7fd',height:'240px'}}>
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-3 mt-5">
                            <div className="card about" style={{height:'150px'}}>
                                <div className="row ">
                                    <div className="col-sm-12" style={{width:'60px',height:'60px',backgroundColor:'#0d6efd',borderRadius:'50%',marginLeft:'38%',marginTop:'-30px'}}dataAos="fade-zoom-in" data-aos-duration="3000">
                                    <i className="fa-solid fa-user-doctor text-white mt-3 mx-2" style={{fontSize:'25px'}}></i>

                                    </div>
                                    <h2 className="text-center">85</h2>
                                    <h4 className="text-center">Doctors</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mt-5">
                            <div className="card about"  style={{height:'150px'}}>
                                <div className="row">
                                    <div className="col-sm-12"style={{width:'60px',height:'60px',backgroundColor:'#0d6efd',borderRadius:'50%',marginLeft:'38%',marginTop:'-30px'}} data-aos="fade-zoom-in" data-aos-duration="3000">
                                    
                                    <i className="fa-solid fa-flask text-white mt-3 mx-2" style={{fontSize:'25px'}}></i>

                                    </div>
                                    <h2 className="text-center">12</h2>
                                    <h4 className="text-center">Research Labs</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mt-5">
                            <div className="card about"  style={{height:'150px'}}>
                                <div className="row">
                                    <div className="col-sm-12" style={{width:'60px',height:'60px',backgroundColor:'#0d6efd',borderRadius:'50%',marginLeft:'38%',marginTop:'-30px'}}   data-aos="fade-zoom-in" data-aos-duration="3000">
                                    <i className="fa-solid fa-award text-white mt-3 mx-2" style={{fontSize:'30px'}}></i>

                                    </div>
                                    <h2 className="text-center">150</h2>
                                    <h4 className="text-center">Awards</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mt-5">
                            <div className="card about"  style={{height:'150px'}}>
                                <div className="row">
                                    <div className="col-sm-12"  style={{width:'60px',height:'60px',backgroundColor:'#0d6efd',borderRadius:'50%',marginLeft:'38%',marginTop:'-30px'}}  data-aos="fade-zoom-in" data-aos-duration="3000">
                                    <i className="fa-solid fa-building text-white mt-3" style={{fontSize:'25px',marginLeft:'10px'}}></i>

                                    </div>
                                    <h2 className="text-center">18</h2>
                                    <h4 className="text-center">Departments</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
         </div>
    <Futer/>
    </>
  )
}
