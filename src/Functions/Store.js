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

var mexs = [
  {
    value: "prova",
    Sender: "Il bro",
    To: "me",
  },
  {
    value: "prova1",
    Sender: "me",
    To: "Il bro",
  },
];

function getMex() {
  return mexs;
}

function AddMex(Messaggio, sender, to) {
  var newMex = { value: Messaggio, Sender: to, To: sender };
  mexs[mexs.length] = newMex;
}

export { getContatti, getMex,AddMex };
