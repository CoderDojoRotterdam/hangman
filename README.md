# Galgje

Dit is de uitgewerkte versie van het spel galgje. Om het spel werkend te kunnen bekijken, open je index.html in een webbrowser (bijvoorbeeld Google Chrome). Het spel kan vervolgens gespeeld worden met toetsenbord en muis.

# Technisch
Het spel is opgebouwd in twee stukken. De meeste logica staat in `galg.js` waarin al het teken- en rekenwerk wordt gedaan. De andere helft staat in `spel.js` waarin de verschillende onderdelen aan elkaar worden geknoopt. Hierin staat de echte spel logica.

# Pseudo code
De spellogica kan worden beschreven in de volgende stappen:

```
Wanneer spel geladen is
    - Kies een willekeurig woord
    - Laat de hints (streepjes) zien

Wanneer er op de controleerknop gedrukt wordt
    Als ingevulde letter voorkomt in gekozen woord
        - Onthul de ingevulde letter in het woord
    Anders
        - Galg stapje verder
    
    Als de speler af is
        - Toon de 'helaas' tekst
    
    Als de speler gewonnen heeft
        - Toon de hoera!! tekst

```

# Te gebruiken functies
We hebben het zware teken- en rekenwerk alvast voor je gedaan en verstopt in functies. Deze hoef je 'alleen nog maar' in de juiste volgorde uit te voeren. Hieronder een klein overzicht van de functies en wat ze doen.

## kiesWillekeurigWoord();
`galg.kiesWillekeurigWoord();` kiest een willekeurig woord uit de lijst met woorden, breekt deze op in stukjes en maakt een zelfde hoeveelheid streepjes aan die op het scherm worden getoond.

- Deze functie geeft niets terug.
- Deze functie verwacht geen parameters.

## laatHintsZien();
`galg.laatHintsZien();` laat de streepjes op het scherm zien.

- Deze functie geeft niets terug.
- Deze functie verwacht geen parameters.

## ingevuldeLetter();
`galg.ingevuldeLetter();` geeft de huidige ingevulde letter terug en maakt het invoerveld leeg.

- Deze functie geeft de huidige ingevulde letter terug.
- Deze functie verwacht geen parameters.

## zitLetterInWoord(ingevuldeLetter);
`galg.zitLetterInWoord(ingevuldeLetter)` controleert of de ingevulde letter in het gekozen woord zit.

- Deze functie geeft `true` of `false` terug.
- Deze functie accepteert een letter als argument.

## onthulLetter(ingevuldeLetter);
`galg.onthulLetter(ingevuldeLetter);` toont de gegeven letter op de juiste plaats tussen de streepjes.

- Deze functie geeft niets terug.
- Deze functie accepteerd een letter als argument.

## fout();
`galg.fout();` brengt de galg een stapje verder door een nieuw lijntje te tekenen.

- Deze functie geeft niets terug.
- Deze functie verwacht geen parameters.

## spelerIsAf();
`galg.spelerIsAf()` controleert of de speler af is.

- Deze functie geeft `true` of `false` terug.
- Deze functie verwacht geen parameters.

## helaas();
`galg.helaas();` tekent het woord 'helaas' op het scherm om aan te geven dat de speler verloren heeft.

- Deze functie geeft niets terug.
- Deze functie verwacht geen parameters.

## spelerHeeftGewonnen();
`galg.spelerHeeftGewonnen()` controleert of de speler gewonnen heeft.

- Deze functie geeft `true` of `false` terug.
- Deze functie verwacht geen parameters.

## feest();
`galg.feest();` tekent 'Hoera!!' op het scherm om aan te geven dat de speler gewonnen heeft.

- Deze functie geeft niets terug.
- Deze functie verwacht geen parameters.