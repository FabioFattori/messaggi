/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'

function Chat({ UserName }) {
  const [content, setContent] = useState();

  useEffect(() => {

    if (UserName !== undefined && UserName !== null) {
      setContent(
        <div>
          <div className="HeaderChat">
            <Avatar size="sm" bg="teal.500" />
            <h1>{UserName}</h1>
          </div>
          <div className="Messaggi"></div>
          <Input variant='unstyled' placeholder='Scrivi Un Messaggio' />
        </div>
      );
    } else {
      setContent(
        <div>
          <p>POrco</p>
        </div>
      );
    }
  }, [UserName]);

  return <div className="chatContent">{content}</div>;
}

export default Chat;
