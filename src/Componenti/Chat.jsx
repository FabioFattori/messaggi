/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Mex from "./ListaMex"
import "./Chat.css";

function Chat({ UserName }) {
  const [content, setContent] = useState();

  function InviaMex(toSend){

  }

  useEffect(() => {
    if (UserName !== undefined && UserName !== null) {
      setContent(
        <div className="ContainerChatContent">
          <div className="HeaderChat">
            <Avatar size="2xs" bg="teal.500" />
            <h1 className="NomeContatto">{UserName}</h1>
          </div>
          <div className="Messaggi">
            <Mex UserName={UserName}/>
          </div>
          <div className="ScriviMex">
            <Input variant="unstyled" className="InputMex" placeholder="Scrivi Un Messaggio" />
            <i className="las la-arrow-circle-right SendIcon"></i>
          </div>
        </div>
      );
    } else {
      setContent(
        <div className="NoContactSelected">
          <p>Scegli un Contatto ed inizia a Chattare!</p>
        </div>
      );
    }
  }, [UserName]);

  return <div className="chatContent">{content}</div>;
}

export default Chat;
