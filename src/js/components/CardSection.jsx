import React from "react";

const cards = [1, 2, 3, 4];

const CardsCntainer = () => {
  return (
    <div className="col-12 col-md-3 py-2 ">
      <div className="card " >
    
        <div className="card-body ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Call to action
          </a>
        </div>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <div  className=" container-fluid p-2 ">
      <div className="row  flex-sm-column flex-md-row  ">
        {cards.map((i) => (
          <CardsCntainer key={i} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
