/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import Contatti from "../Componenti/ListaContatti";
import Chat from "../Componenti/Chat";
import "./Home.css";

function Home() {
  const [select, setSelect] = useState();

    useEffect(() => {
      console.log(select)
    }, [select])
    

  var set = (e) => {
    setSelect(e.target.innerText.split("\n")[0])
    

    
  };

  return (
    <div className="HomeContent">
      <Contatti SetSelection={set} />
      <Chat UserName={select} />
    </div>
  );
}

export default Home;
