const Card = (props) => {
  return (
    
    <div className="col-3 card " style={{ "width": "18rem" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body  border border-black">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
