import React from "react";

// profile component render in Home component so check it Home Component
function Profile(props) {
  if(props.path==""){
    throw new Error("")
  }
  return (
    <div className="col-3 card " style={{ width: "18rem" }}>
      <img 
        src={props.path}
        className="card-img-top"
        alt="img" 
      />
      <div className="card-body  border border-black">
        <h5 className="card-title">Prince Yadav</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default Profile;
