/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import "./Chat.css"

function Chat({ UserName }) {
  const [content, setContent] = useState();

  useEffect(() => {

    if (UserName !== undefined && UserName !== null) {
      setContent(
        <div>
          <div className="HeaderChat">
            <Avatar size="2xs" bg="teal.500" />
            <h1 className="NomeContatto">{UserName}</h1>
          </div>
          <div className="Messaggi"></div>
          <Input variant='unstyled' placeholder='Scrivi Un Messaggio' />
        </div>
      );
    } else {
      setContent(
        <div className="NoContactSelected">
          <p>Scegli un Contatto ed inizia a Cattare!</p>
        </div>
      );
    }
  }, [UserName]);

  return <div className="chatContent">{content}</div>;
}

export default Chat;
