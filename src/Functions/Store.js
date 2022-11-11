function getContatti() {
  //questa funzione deve prendere dal DB i contatti
  var lista = [
    {
      Nome: "Il bro",
      Cognome: "cognome",
    },
    {
      Nome: "2",
      Cognome: "cognome",
    },
    {
      Nome: "Il bro2",
      Cognome: "cognome",
    },
  ];

  return lista;
}

function getMex() {
  var mexs = [
    {
      value: "prova",
      Sender: "Il bro",
      To:"me",
    },
    {
      value: "prova1",
      Sender: "me",
      To:"Il bro",
    }
  ];

  

  return mexs;
}

export { getContatti, getMex };
