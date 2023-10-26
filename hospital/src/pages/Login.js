import React from 'react'
import './cssdata.css';
import Navbar from'../components/Navbar';
import Futer from'../components/Futer';

export default function Login() {
  return (
    <>
    <Navbar/>
      <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 imglogin" style={{backgroundSize:'cover',minHeight:'600px'}}>
            <div class="row">
                 <div class="col-sm-4"></div>
                 <div class="col-sm-4 mt-5" style={{backgroundRolor:'transparents',boxShadow:'1px 1px 10px 10px',height:'400px'}}>
                    <form action="logcode.php" method="post">
                    <h1 class="text-center text-primary" style={{fontSize:'50px',fontFamily:'gabrilla'}}>Patient Login</h1><hr/>
                    <div class="row mx-5" >
                        <div class="col-sm-1" style={{height:'40px',width:'40px',borderRadius:'35%'}}><i class="fa-solid fa-user p-1 " style={{color:'blue', fontSize:'32px'}}></i></div>
                        <div class="col-sm-10" >
                        <input type="email" name="emailaddress" id="emailaddress" placeholder="Enter Patient emailaddress" required="true" style={{width:'100%',height:'40px'}}/>
                        </div>
                        <div class="col-sm-1"></div><br/>
                    </div>
                    <div class="row mx-5" >
                        <div class="col-sm-1" style={{height:'40px',width:'40px',borderRadius:'35%'}}><i class="fa-solid fa-unlock p-1" style={{color:'blue', fontSize:'32px'}}></i><br/><br/><input type="checkbox"  name="checkbox" id="checkbox"/></div>
                        <div class="col-sm-10" >
                        <input type="password" name="password" id="password" placeholder="Enter Password" required="true" style={{width:'100%',height:'40px'}}/><br/>
                        <p class="mt-4 text-primary">Remember me</p>
                       
                        </div>
                        <div class="col-sm-1"></div>

                    </div>
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            <input type="submit" value="Submit" name="submit" class="form-control  bg-primary text-white"/>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            <input type="submit" value="Back to Home" class="form-control  bg-secondary text-white"/>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                    </form>
                 </div>
                 <div class="col-sm-4"></div>
            </div>
        </div>
        </div>
    </div>
   <Futer/>
    </>
  );
}
