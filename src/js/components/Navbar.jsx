import React from "react";



const DropDown=()=>{
  return(
<div className="btn-group d-sm-flex d-md-none">
  <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
  <i className="fa-solid fa-bars text-white"></i>
  </button>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-black ">
    <li><a className="dropdown-item  text-white" href="#">Home</a></li>
    <li><a className="dropdown-item  text-white" href="#">About</a></li>
    <li><a className="dropdown-item  text-white" href="#">Services</a></li>
    <li><a className="dropdown-item  text-white" href="#">Contact</a></li>
  </ul>
</div>
  )
}

const Navbar = () => {
  return (
    <nav className="navbar bg-black d-flex align-items-centern flex-row sticky-top px-3">
      <div  >
        <p className="text-white m-0" >Start Bootstrap</p>
      </div>

      <DropDown/>
     
      <div className="d-none d-md-flex   flex-row gap-3  ">
        <p className="text-white m-0" >Home</p>
        <p className="text-white m-0" >About</p>
        <p className="text-white m-0" >Services</p>
        <p className="text-white m-0" >Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
