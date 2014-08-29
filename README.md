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