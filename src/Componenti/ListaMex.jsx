import React, { useState, useEffect } from "react";
import { getMex } from "../Functions/Store";
import "./Mex.css";

function ListaMex({ UserName }) {
  var Inviati;
  const [GraficaMexs, setGrafica] = useState();

  function StampaMessaggiLunghi(ID, Messaggio, index) {
    var toReturn;
    var string="";
    if (ID === "MexRicevuto") {
      for (let i = 0; i < Messaggio.length; i++) {
        for (let j = 0; j < 40; j++) {
          string += Messaggio[j];
          i = j;
        }
        string += " \n";
      }

      return (toReturn = (
        <div key={index} className="MexRicevuto ClasseInvio">
          <p className="rimpiazzo">o</p>
          <p className="ValueTroppoGrossa">
            <span>{string}</span>
          </p>
        </div>
      ));
    } else if (ID === "MexInviato") {
      console.log(Messaggio.length)
      for (let i = 0; i < Messaggio.length; i++) {
        for (let j = 0; j < 40; j++,i++) {
          string += Messaggio[j];
          console.log(string)
          
          
          console.log(i)
        }
        console.log(string)
        string += " \n";
      }

      return (toReturn = (
        <div key={index} className="MexInviato ClasseInvio">
          <p className="rimpiazzo">o</p>
          <p className="ValueTroppoGrossa">
            <span>{string}</span>
          </p>
        </div>
      ));
    }
  }

  function CreaGrafica() {
    var m = [];
    for (let index = 0; index < Inviati.length; index++) {
      if (
        Inviati[index].Sender === "me" &&
        Inviati[index].To === localStorage.getItem("Select")
      ) {
        if (Inviati[index].value.length > 24) {
          m[index] = StampaMessaggiLunghi(
            "MexRicevuto",
            Inviati[index].value,
            index
          );
        } else {
          m[index] = (
            <div key={index} className="MexRicevuto">
              <p className="Value">
                <span>{Inviati[index].value}</span>
              </p>
            </div>
          );
        }
      } else if (Inviati[index].Sender === localStorage.getItem("Select")) {
        if (Inviati[index].value.length > 24) {
          m[index] = StampaMessaggiLunghi(
            "MexInviato",
            Inviati[index].value,
            index
          );
        } else {
          m[index] = (
            <div key={index} className="MexInviato">
              <p className="Value">
                <span>{Inviati[index].value}</span>
              </p>
            </div>
          );
        }
      }
    }

    setGrafica(m);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Inviati = getMex();
    CreaGrafica();
  }, [UserName]);

  return <div className="MexContainer">{GraficaMexs}</div>;
}

export default ListaMex;
