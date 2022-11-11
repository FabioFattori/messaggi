import React from "react";
import { Input } from "@chakra-ui/react";
import "../Componenti/SearchBar.css";
import getContatti from "../Functions/Store"
import { CloseButton } from '@chakra-ui/react'

function SearchBar({setContatti}) {

    function findInContatti(stringa){
        var toReturn=[];
        var i=0;
        
        getContatti().forEach(contatto => {
            var check=false;
            for (let index = 0; index < stringa.length; index++) {
                if(!check){
                    if(stringa[index] === contatto.Nome[index]){
                        toReturn[i]=contatto;
                        i++;
                        check=true;
                    }
                }
                
            }
        });

        setContatti(toReturn);
    }


  return (
    <div className="SearchBarContent">
      <i className="las la-search"></i>

      <Input id="SearchBar" variant='unstyled' className="InputSearch" placeholder="Cerca tra i contatti" onChange={(e)=>{findInContatti(e.target.value)}}/>
      <CloseButton size='sm' onClick={(e)=>{
        setContatti(getContatti())
        document.getElementById("SearchBar").value=""
        }}/>
    </div>
  );
}

export default SearchBar;
