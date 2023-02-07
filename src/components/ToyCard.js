import React from "react";

function ToyCard({toy, like, remove}) {

  function handleLike(){
    like(toy)
  }

  function handleRemove(){
    remove(toy)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleRemove}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;