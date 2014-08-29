Galg.prototype.klaarMetLaden = function(galg){
  console.log('Hallo, wereld!');

  // stap 1) kies een willekeurig woord
  galg.kiesWillekeurigWoord();

  // stap 2) laat het woord als streepjes zien
  galg.laatHintsZien();
}

Galg.prototype.opKnopGeklikt = function(galg){
  // Hier hoort alle logica die moet worden uitgevoerd
  // als er op de knop geklikt wordt.

  var ingevuldeLetter = galg.ingevuldeLetter();

  if(galg.zitLetterInWoord(ingevuldeLetter)){
    galg.onthulLetter(ingevuldeLetter);
  }
  else{
    galg.fout();
  }

  if(galg.spelerIsAf()){
    galg.helaas();
  }

  if(galg.spelerHeeftGewonnen()){
    galg.feest();
  }

}