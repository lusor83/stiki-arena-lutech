# Stick Arena

Picchiaduro 2D con stickman, ispirato alle sale giochi degli anni Novanta. Realizzato con HTML, CSS e JavaScript, senza dipendenze da installare.

## Giocare in locale

Scarica il repository tramite **Code → Download ZIP**, estrai i file e apri `dist/index.html` nel browser. Non servono account, login o server.

In alternativa, dalla cartella del progetto:

```sh
python -m http.server 8000 --directory dist
```

Apri <http://localhost:8000>. Puoi usare anche l'estensione Live Server di VS Code.

Il gioco funziona offline. Il font viene scaricato da Google Fonts quando disponibile; senza connessione viene utilizzato un font di sistema.

## Modalità

- Un giocatore contro la CPU.
- Due giocatori sulla stessa tastiera.
- Il primo a vincere due round vince il match; ogni round dura 60 secondi. I pareggi si rigiocano.
- Pugni, calci, parate e proiettili speciali. L'energia speciale si ricarica nel tempo.
- Audio attivabile, pausa, rivincita e pulsanti touch.

## Comandi

| Azione | Giocatore 1 | Giocatore 2 |
| --- | --- | --- |
| Muoviti | A / D | ← / → |
| Salta | W | ↑ |
| Para | S | ↓ |
| Pugno | J | 1 |
| Calcio | K | 2 |
| Speciale | L | 3 |
| Pausa / riprendi | Esc | Esc |
| Inizia / rivincita | Invio | Invio |

## File

- `dist/index.html`: interfaccia del gioco.
- `dist/style.css`: stile e adattamento agli schermi.
- `dist/game.js`: rendering Canvas, combattimento e CPU.
- `check.cjs`: verifica automatica delle meccaniche, eseguibile con Node.js.

## Verifica

```sh
node --check dist/game.js
node check.cjs
```

La verifica automatica simula timer, pugni, parate, pausa, riavvio, speciali, conclusione del match e attacchi della CPU. Non sostituisce una prova visiva nel browser.
