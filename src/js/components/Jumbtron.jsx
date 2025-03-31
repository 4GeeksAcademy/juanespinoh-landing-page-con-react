import React from "react";

const Jumbtron = () => {
  return (
    <div style={{padding:"10px 10px",height:"50vh"}} className=" d-flex justify-content-center  ">
      <div style={{background:"lightgrey"}} className="card rounded-0 container-fluid" >
        <div className="card-body">
          <h1  className="card-title">A Warm Welcome!</h1>
          <p className="card-text ">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbtron;
