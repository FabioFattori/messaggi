/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Mex from "./ListaMex";
import "./Chat.css";
import { AddMex } from "../Functions/Store";

function Chat({ UserName }) {
  const [content, setContent] = useState();
  const [NewMex, setNewMex] = useState();
  var i = 0;

  function InviaMex() {
    console.log(NewMex);
    if (NewMex !== "") {
      AddMex(NewMex,"me",localStorage.getItem("Select"))
    }
  }

  useEffect(() => {
    if (UserName === undefined) {
      if (i === 0) {
        i++;
        var parentDiv = document.getElementById("ContentOfChat");
        var NoChat = document.createElement("div");
        NoChat.id = "NoChat";
        NoChat.classList = "NoContactSelected";
        NoChat.innerHTML = "Scegli un Contatto ed inizia a Chattare!";
        parentDiv.insertBefore(NoChat, parentDiv.nextSibling);
        document.getElementById("input").style.display = "none";
      }
    }
  }, []);

  useEffect(() => {
    setNewMex("");
    if (UserName !== undefined && UserName !== null) {
      document.getElementById("NoChat").style.display = "none";

      document.getElementById("input").style.display = "flex";

      setContent(
        <div className="cHat">
          <div className="HeaderChat">
            <Avatar size="2xs" bg="teal.500" />
            <h1 className="NomeContatto">{UserName}</h1>
          </div>
          <div className="Messaggi">
            <Mex UserName={UserName} />
          </div>
        </div>
      );
    }
  }, [UserName]);

  return (
    <div className="chatContent">
      <div id="ContentOfChat" className="ContainerChatContent">
        {content}
        <div id="input" className="ScriviMex">
          <Input
            variant="unstyled"
            value={NewMex}
            onChange={(e) => {
              setNewMex(e.target.value);
            }}
            className="InputMex"
            placeholder="Scrivi Un Messaggio"
          />
          <i
            style={{ cursor: "pointer" }}
            onClick={() => InviaMex()}
            className="las la-arrow-circle-right SendIcon"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Chat;
