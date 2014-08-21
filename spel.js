$(document).ready(function(){

  /*
     TODO:
     - Code opdelen in duidelijke stukjes
     - Voorzien van duidelijk commentaar
     - REFACTOR!

  */

  // Maak een nieuwe galg tekening
  var galg = new Galg();

  // Woorden
  var woorden = [];
  woorden.push("banaan");
  woorden.push("pindakaas");
  woorden.push("fiets");
  woorden.push("balon");
  woorden.push("muziek");
  woorden.push("coderdojo");
  woorden.push("rotterdam");
  woorden.push("bitterkoekjesvla");


  $("#controleer").click(function(){
    // Wanneer er op de knop 'controleer' wordt geklikt..

    // Hier mag jij aan de slag

    var gekozenLetter = ingevuldeLetter();

    if(gekozenWoordInStukjes.indexOf(gekozenLetter) > -1){
      onthulLetter(gekozenLetter);
    }
    else{
      galg.fout();
    }

  });

  function ingevuldeLetter(){
    return $('#letter').val();
  }

  // Kies een willekeurig woord
  var gekozenWoord = woorden[Math.floor(Math.random() * woorden.length)];

  // Deel het woord op in aparte letters
  var gekozenWoordInStukjes = gekozenWoord.split('');

  // Maak van iedere letter een streepje
  var gekozenWoordInStukjesMasker = [];
  for(var letter in gekozenWoordInStukjes){
    gekozenWoordInStukjesMasker.push("-");
  }

  // Zet de streepjes op het scherm
  laatHintsZien();

  function onthulLetter(letter){
    for(var i in gekozenWoordInStukjes){
      if(gekozenWoordInStukjes[i] == letter){
        gekozenWoordInStukjesMasker[i] = letter;
      }
    }
    laatHintsZien();
  }

  function laatHintsZien(){
    $("#hints").text(gekozenWoordInStukjesMasker.join(' '));  
  }

});