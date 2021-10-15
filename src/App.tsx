import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List"; 
import AddToList from "./Components/AddToList";

export interface Istate {
  people: {
    name: string
    age: number | string
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setpeople] = useState<Istate["people"]>([
    {
      name: "Boat",
      age: 34,
      url: "something",
    }
  ])


  return (
    <div className="App">
        Header
       <List people={people} />
       <AddToList people={people} setPeople={setpeople}/>
    </div>
  );
}

export default App;
