import React from "react";
import './cssdata.css';
import a1 from './img/hero-bg.jpg';
import a2 from './img/a1.jpg';
import a3 from './img/a2.jpg';
import a4 from './img/a9.gif';
import a5 from './img/departments-1.jpg';
import a6 from './img/4.png';
import a7 from './img/6.png';
import a8 from './img/14.png';
import a9 from './img/19.png';
import a10 from './img/7.png';
import a11 from './img/8.png';
import a12 from './img/15.png';
import a13 from './img/9.png';

import Navbar from'../components/Navbar';
import Futer from'../components/Futer';

export default function Body() {
    return (
        <>
             <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={a1} className="d-block w-100" height="500px" data-aos="fade-right" data-aos-duration="1000" alt=".hh.." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 className="text-primary" style={{ marginRight: '30%', marginTop: '-30%' }} data-aos="fade-right" data-aos-duration="1000">We Take Care of Healthy Health</h1>
                                        <h5 style={{ marginRight: '30%',color:'blue' }} data-aos="fade-left" data-aos-duration="1000">Our team at Medilink Multispecialty Hospitals</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={a2} className="d-block w-100" height="500px" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 className="text-primary" style={{ marginRight: '30%', marginTop: '-30%' }} data-aos="fade-right" data-aos-duration="1000">We Take Care of Healthy Health</h1>
                                        <h5 style={{ marginRight: '30%',color:'blue' }} data-aos="fade-left" data-aos-duration="1000">Our team at Medilink Multispecialty Hospitals</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={a3} className="d-block w-100 " style={{ height: '500px', width: '100px' }} alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 className="text-primary" style={{ marginRight: '30%', marginTop: '-30%' }} data-aos="fade-right" data-aos-duration="1000">We Take Care of Healthy Health</h1>
                                        <h5 style={{ marginRight: '30%',color:'blue' }} data-aos="fade-left" data-aos-duration="1000">Our team at Medilink Multispecialty Hospitals</h5>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row bg-white">
                    <div className="col-sm-6">
                        <img src={a4} className="img2" width="100%" height="500px;" />
                    </div>
                    <div className="col-sm-6 mt-1" height="500px;">
                        <h1 className="mx-5 mt-1" style={{ fontSize: '45px' }}>Medi<span className="text-info">link Hosp</span>itals</h1>
                        <h4 className="mx-5">Multispeciality Hospitals</h4>
                        <p className="mx-5" style={{ textAlign: 'justify' }}>We started our journey since 2002 and thus state with pride and gratitude that we have completed two decades of journey successfully. Our team at Medilink Multispecialty Hospitals consists of specialists & Super specialists from all Branches. We are serving from two branches in Ahmedabad- Satellite & Sabarmati. Both the units are state-of-art multi-speciality hospital set ups situated at strategic locations, and have all required departments/facilities. Apart from this, we also have 24 *7 Radiology, pathology & In-house Pharmacy services.</p>
                        <p className="mx-5" style={{ textAlign: 'justify' }}>One of our major speciality, is being run under the banner of Medilink Diabetes Clinics, and headed by the Diabetic & Metabolic Physician and Diabetologist Dr. Manish Agarwal. We, at Medilink Diabetes Clinic are dedicated to delivering world-class care and management of diabetes and related metabolic disorders.</p>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h1 className="text-center text-primary" style={{ fontFamily: 'gabrilla' }}>Services</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-2"><hr style={{ border: '2px solid #0d6efd', marginTop: '-5px', marginLeft: '30px', borderRadius: '10%' }} /></div>
                        <div className="col-sm-5"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <p style={{ color: 'grey' }} >Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world do not <span className="mx-5 ms-5">have enough hospitals, equipment, and trained staff to handle the volume of persons who need care.</span></p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            {/* img */}
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-4 mt-5">
                                        <i className="fa-solid fa-heart-pulse" style={{ fontSize: '60px' }}></i>
                                    </div>
                                    <div className="col-sm-4"></div>
                                    <h3 className="text-center mt-2">About your heart-pulse</h3>
                                    <p className="text-center">knowledge about your heart rate can help you monitor your fitness level </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-4 mt-5" >
                                        <i className="fa-solid fa-hospital-user" style={{ fontSize: '60px' }}></i>
                                    </div>
                                    <div className="col-sm-4"></div>
                                </div>
                                <h3 className="text-center mt-2">A Contact is essential</h3>
                                <p className="text-center">A Contact Us page is essential to building a brand’s website it allows visitors </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-4 mt-5">
                                        <i className="fa-solid fa-wheelchair" style={{ fontSize: '60px' }}></i>
                                    </div>
                                    <div className="col-sm-4"></div>
                                </div>
                                <h3 className="text-center mt-2">Power Wheel Chair</h3>
                                <p className="text-center">This wheelchair has fully enabled you to travel and see so many amezing places.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Department */}
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h1 className="text-center text-primary" style={{ fontFamily: 'gabrilla' }} >Department</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-2"><hr style={{ border: '2px solid #0d6efd', marginTop: '-5px', marginLeft: '30px', borderRadius: '10%' }} /></div>
                        <div className="col-sm-5"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="text-center text-secondary" >Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="container">
                <div className="row mt-4">
                    <div className="col-sm-3 special" style={{ borderRight: '2px solid grey' }}>
                        <b><p className="a1 text-primary mx-4">Cardiology</p>
                            <p className="a2 mx-4">Neurology</p>
                            <p className="a3 mx-4">Hepatology</p>
                            <p className="a4 mx-4">Pediatrics</p>
                            <p className="a5 mx-4">Eye Care</p></b>

                    </div>
                    <div className="col-sm-7">
                        <h3 className="mx-4">Cardiology</h3>
                        <p className="mx-4 text-secondary">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p className="mx-4 text-secondary">Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div className="col-sm-2" data-aos="fade-down" data-aos-duration="2000">
                        <img src={a5} className="img2"width="100%" height="200px" />
                    </div>
                </div>
            </div>
            {/* facility */}
            <div className="container-fluid">
                <div className="row bg-white mt-1" style={{backgroundImage:"url('images/footer-bg.png')",height:'200px',backgroundRepeat:'no-repeat'}}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-5">
                        <h2 className="mx-5 ms-5 mt-5" ><span className="text-primary" style={{color:'#0082cf',height:'50px',borderBottom:'4px solid'}}>CASHLESS</span> TREATMENT</h2>
                        <p >we accept most leading health insurance policies. Avail the benefits of</p>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-3" data-aos="fade-down" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a6} className="card-img-top img2" />

                                </div>
                            </div>
                            <div className="col-sm-3" data-aos="fade-down" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a7} className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                            <div className="col-sm-3" data-aos="fade-down" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a8} className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                            <div className="col-sm-3" data-aos="fade-down" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a9}className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-3" data-aos="fade-up" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a10} className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                            <div className="col-sm-3" data-aos="fade-up" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a11} className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                            <div className="col-sm-3" data-aos="fade-up" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a12} className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                            <div className="col-sm-3" data-aos="fade-up" data-aos-duration="2000">
                                <div className="card" style={{width:'100%'}}>
                                    <img src={a13} className="card-img-top img2" alt="..."/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>

            <Futer/>
        </>
    );
}