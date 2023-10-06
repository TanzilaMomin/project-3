import React from "react";
import { Mech } from "./components/Mech";
import { Civil } from "./components/Civil";
import { Elec } from "./components/Elec";
import { Comp } from "./components/Comp";
import { Electr } from "./components/Electr";
import { It } from "./components/It";
import "./components/common.css" ;

function App() {
  return (
    <div className="main">
      <Mech />
      <Civil />
      <Elec />
      <Comp />
      <Electr />
      <It />
    </div>
  );
}

export default App;
