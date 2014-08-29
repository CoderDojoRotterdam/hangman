Galg.prototype.klaarMetLaden = function(galg){
  // stap 1) kies een willekeurig woord
  galg.kiesWillekeurigWoord();

  // stap 2) laat het woord als streepjes zien
  galg.laatHintsZien();
}

Galg.prototype.opKnopGeklikt = function(galg){
  
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