# Bloemenparadijs van Dortstraat

Website: <https://vandortstraat.nl>

De site wordt automatisch gebouwd door GitHub Pages (met Jekyll) zodra je
iets naar `main` pusht. Na een minuut of twee staat de wijziging online.

## Iets aanpassen

| Wat                              | Waar                    |
| -------------------------------- | ----------------------- |
| Afspraak toevoegen / planning    | `_data/agenda.yml`      |
| Laatste nieuws (met foto)        | `_data/nieuws.yml`      |
| Begroting                        | `_data/begroting.yml`   |
| Contactpersonen, kernteam, links | `_data/contact.yml`     |
| Teksten (plan, uitvoering, ...)  | `index.html`            |
| Kleuren en opmaak                | `assets/style.css`      |
| Menu en footer                   | `_layouts/default.html` |

In de agenda hoef je alleen de datum (`JJJJ-MM-DD`) in te vullen: de weekdag
wordt automatisch berekend, de lijst wordt op datum gesorteerd, en komende
afspraken krijgen vanzelf het label "binnenkort" en verschijnen bovenaan de
pagina als "Volgende afspraak".

## Foto's

Zet foto's in `img/`. Maak grote telefoonfoto's eerst kleiner, anders laadt de
site traag, bijvoorbeeld:

    convert foto.jpg -auto-orient -strip -resize 1600x -quality 80 img/naam.jpg

(`-strip` verwijdert ook de GPS-locatie uit de foto.)

## Lokaal bekijken

    jekyll serve

en open <http://localhost:4000>.
