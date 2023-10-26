import React from "react";
import './cssdata.css';
import Navbar from'../components/Navbar';
import Futer from'../components/Futer';

export default function Contact() {
    return (
        <>
           <Navbar/>
            <div className="container-fluid">
                <div className="row imgdata" style={{ backgroundColor: '#f1f7fd', backgroundSize: 'cover', minHeight: '50px' }}>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10 mt-5" style={{ boxShadow: '3px 3px 50px 10px', minHeight: '550px' }}>

                        <div className="row mt-5">
                            <div className="col-sm-12">
                                <h1 className="text-center text-secondary" style={{ fontSize: '60px', fontFamily: 'gabrilla', borderRadius: '10px' }}><span className="text-primary">Contact Us</span></h1>
                            </div>
                            <div className="row">
                                <div className="col-sm-5"></div>
                                <div className="col-sm-2"><hr style={{ border: '2px solid #0d6efd', marginTop: '-5px', marginLeft: '30px', borderRadius: '10%' }} /></div>
                                <div className="col-sm-5"></div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-sm-2 mx-5 body" style={{ fontSize: '20px', height: '50px', width: '50px', borderRadius: '50%', backgroundColor: '#d6e9fa' }}>
                                        <i className="fa-solid fa-location-dot mt-3 mx-1" style={{ color: '#0085d1' }}></i>
                                        <p className="mx-5" style={{ marginTop: '-60px' }}>Location:</p>

                                    </div>
                                    <div className="col-sm-10 mx-5">
                                        <p className="mx-5" style={{ marginTop: '-30px' }}>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-2 mx-5 body" style={{ fontSize: '20px', height: '50px', width: '50px', borderRadius: '50%', backgroundColor: '#d6e9fa' }}>
                                        <i className="fa-solid fa-envelope mt-3 mx-1" style={{ color: '#0085d1' }}></i>
                                        <p className="mx-5" style={{ marginTop: '-50px' }}>Email:</p>

                                    </div>
                                    <div className="col-sm-10 mx-5">
                                        <p className="mx-5" style={{ marginTop: '-20px' }}>info@medilinkhospital.com</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-2 mx-5 body" style={{ fontSize: '20px', height: '50px', width: '50px', borderRadius: '50%', backgroundColor: '#d6e9fa' }}>
                                        <i className="fa-solid fa-phone mt-3 mx-1" style={{ color: '#0085d1' }}></i>
                                        <p className="mx-5" style={{ marginTop: '-50px' }}>Call:</p>

                                    </div>
                                    <div className="col-sm-10 mx-5">
                                        <p className="mx-5" style={{ marginTop: '-20px' }}>+1 5589 55488 55s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 ">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input type="text" name="name" id="name" className="form-control" required="true" placeholder="Enter Name" /><br />

                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" name="emailaddress" id="emailaddress" className="form-control" required="true" placeholder="Enter Email" /><br />
                                    </div>
                                </div>
                                <input type="number" name="contactno" id="contactno" className="form-control" required="true" placeholder="Enter Mobile Number" /><br />
                                <textarea name="address" id="address" className="form-control" placeholder="Message (Option)" rows="5"></textarea> <br />
                                <input type="submit" value="Make an Appointment" className="btn btn-primary" name="contact" />
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
