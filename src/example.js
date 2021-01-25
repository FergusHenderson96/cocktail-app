import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [currentName, setCurrentName] = useState("");
  const [currentNum, setCurrentNum] = useState("");
  const [numStore, setNumStore] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNumStore([...numStore, { name: currentName, num: currentNum }]);
    setCurrentName("");
    setCurrentNum("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <GenericInput name={currentName} func={setCurrentName} />
        <GenericInput name={currentNum} func={setCurrentNum} />
        <button type=“submit”>Submit</button>
      </form>
      <List items={numStore} />
    </div>
  );
};
const GenericInput = ({ name, func }) => (
  <input value={name} onChange={(e) => func(e.target.value)} />
);
const List = ({ items }) => (
  <ul>
    {items.map((item) => {
      return <ListItem item={item} />;
    })}
  </ul>
);
const ListItem = ({ item }) => (
  <li>
    {item.name}, {item.num}
  </li>
);
export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    getChuck();
  }, []);
  const getChuck = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data.value);
      });
  };
  return (
    <>
      <h1>Data:</h1>
      <p>{data}</p>
      <button onClick={getChuck}>New quote</button>
    </>
  );
};