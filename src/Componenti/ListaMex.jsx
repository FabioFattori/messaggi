import React, { useState, useEffect } from "react";
import { getMex } from "../Functions/Store";
import "./Mex.css";

function ListaMex({UserName}) {
  var Inviati;
  const [GraficaMexs, setGrafica] = useState();

  function CreaGrafica() {
    var m = [];
    for (let index = 0; index < Inviati.length; index++) {
      if (
        Inviati[index].Sender === "me" &&
        Inviati[index].To === localStorage.getItem("Select")
      ) {
        m[index] = (
          <div className="MexRicevuto">
            <p className="Value"><span>{Inviati[index].value}</span></p>
          </div>
        );
      } else if (Inviati[index].Sender === localStorage.getItem("Select")) {
        m[index] = (
          <div className="MexInviato">
            <p className="Value"><span>{Inviati[index].value}</span></p>
          </div>
        );
      }
    }

    setGrafica(m);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Inviati = getMex();
    CreaGrafica();
  },[UserName]);

  return <div className="MexContainer">{GraficaMexs}</div>;
}

export default ListaMex;
