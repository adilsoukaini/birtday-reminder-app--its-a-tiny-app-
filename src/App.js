// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import data from "./data";
// eslint-disable-next-line no-unused-vars
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birtdays today</h3>
        <List people={people} setPeople={setPeople}/>
        <button onClick={() =>setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
