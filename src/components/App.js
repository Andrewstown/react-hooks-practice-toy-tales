import React, {useState, useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState({})
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToys(data))
  } ,[])

  function handleClick(){
    setShowForm((showForm) => !showForm);
  }

  function handleSubmit(toy){
    fetch('http://localhost:3001/toys', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(toy)
    })
    .then(r => r.json())
    .then(data => setToys([...toys, data]))
  }

  function handleDelete(toy){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: 'DELETE',
    })
    .then(setToys(toys => toys.filter(tuy => {
      if(tuy.id !== toy.id){
        return tuy
      }
    })))
  }

  function handleLike(toy){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({likes: toy.likes + 1})
    })
    .then(r => r.json())
    .then(data => setToys(toys => toys.map(tuy => {
      if(tuy.id === toy.id){
        return data
      }else{
        return tuy
      }
    })))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm submit={handleSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {toys.length > 0 ? <ToyContainer toys={toys} like={handleLike} remove={handleDelete}/> : null}
    </>
  );
}

export default App;
