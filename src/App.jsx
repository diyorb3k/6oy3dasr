import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Foter from "./components/foooter/Foter";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Foter />


    </>
    
  );
}
backTop = ()=>{
  this.setState({
    top:0,
    behavior:"smooth",
  });
}
<button onClick={this.backTop}>Bactop</button>

export default App;
