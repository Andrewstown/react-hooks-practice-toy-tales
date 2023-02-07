import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, like, remove}) {
  return (
    <div id="toy-collection">{toys.map(toy => {
      return <ToyCard toy={toy} like={like} remove={remove}/>
    })}</div>
  );
}

export default ToyContainer;
