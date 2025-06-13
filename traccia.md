Ciao ragazzi, esercizio di oggi: ex-express-blog-sql
repo: express-blog-sql
Esercizio
Prendiamo le API precedentemente create per il vostro blog ed aggiungiamo la persistenza tramite la connessione a un DB

## Milestone 1

K - Importiamo il db in allegato su MySQL Workbench
K - Installiamo il client mysql2 con npm i mysql2 nell’app Express
K - Creiamo un file di configurazione per connettere il database
K - Inseriamo un console.log nella logica di connessione e proviamo ad avviare l’applicazione per verificare che non ci siano errori.

## Milestone 2

K - Facciamo sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON
K - Verifichiamo su Postman che la risposta sia corretta

## Milestone 3

Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database
Verifichiamo su Postman che la chiamata non dia errore e risponda 204
Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso

## Milestone 4

Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON
Verifichiamo su Postman che la risposta sia corretta

## Bonus:

Far sì che la SHOW restituisca il post comprensivo di tag, recuperandoli grazie alla relazione tra post e tags, esistente sul database
Buon lavoro!
