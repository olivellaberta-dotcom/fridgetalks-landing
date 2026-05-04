# 📘 Guida GitHub per Berta — Fridgetalks Landing

Ciao Berta! 👋 Questa guida ti spiega come lavorare con GitHub per il progetto Fridgetalks in modo semplice e pratico.

---

## 🎯 Obiettivo

Devi:
1. Creare un repository GitHub chiamato `fridgetalks-landing`
2. Caricare i file del progetto (che Vale ha già preparato per te)
3. Collegarlo con Vercel per pubblicare la landing page
4. Fare modifiche e aggiornarle quando necessario

---

## 🌐 OPZIONE 1 — Browser (più semplice per iniziare)

### ✅ PRO:
- Non serve installare nulla
- Interfaccia visuale semplice
- Perfetto per modifiche occasionali
- Vedi subito cosa stai facendo

### ⚠️ CONTRO:
- Devi caricare file uno per uno (o in gruppo)
- Più lento se fai tante modifiche
- Non puoi testare il sito in locale prima di pubblicare

### 📝 COME FUNZIONA:

#### 1. Creare il repo (hai già iniziato!)
- Vai su [github.com](https://github.com)
- Click sul `+` in alto a destra → "New repository"
- Nome: `fridgetalks-landing`
- Visibilità: **Public** (Vercel funziona meglio così)
- **NON marcare** "Add README" / ".gitignore" / "License" (Vale te li ha già preparati)
- Click "Create repository"

#### 2. Caricare i file la prima volta
GitHub ti mostra una pagina con istruzioni — cerca il link **"uploading an existing file"**.

- Click su quel link
- **Trascina tutti i file** che Vale ti ha preparato nella zona di upload
  - Assicurati di trascinare la cartella `src/` con i suoi file dentro
  - Trascina anche i file "nascosti" come `.gitignore`
- GitHub ti chiede un messaggio: scrivi `Initial commit`
- Click "Commit changes"
- ✅ Fatto! I file sono su GitHub

#### 3. Fare modifiche successive (esempio: cambiare un testo)
Diciamo che devi modificare un testo in `App.jsx`:

- Vai al tuo repo: `github.com/tuousuario/fridgetalks-landing`
- Naviga fino al file: click su `src/` → click su `App.jsx`
- Click sulla **matita** in alto a destra ("Edit this file")
- Modifica il testo che vuoi cambiare
- Scroll in basso → scrivi cosa hai cambiato (es. "Cambio testo de bienvenida")
- Click "Commit changes"
- ✅ Vercel lo pubblicherà automaticamente in ~2 minuti

#### 4. Caricare file nuovi (esempio: una nuova immagine)
- Vai alla cartella dove vuoi aggiungere il file (es. la radice del repo)
- Click "Add file" → "Upload files"
- Trascina il file
- Scrivi messaggio (es. "Añado logo Fridgetalks")
- Click "Commit changes"

---

## 💻 OPZIONE 2 — Terminal/GitHub Desktop (più potente, da imparare)

### ✅ PRO:
- Puoi testare il sito **in locale** sul tuo Mac prima di pubblicare
- Più veloce se fai tante modifiche
- Puoi lavorare offline e sincronizzare dopo
- Workflow professionale (impari uno strumento usato da tutti gli sviluppatori)

### ⚠️ CONTRO:
- Devi installare qualcosa (GitHub Desktop o imparare il terminal)
- Curva di apprendimento iniziale
- Più passaggi per ogni modifica

### 📝 COME FUNZIONA (con GitHub Desktop — più facile del terminal):

#### 1. Installare GitHub Desktop
- Scarica da: [desktop.github.com](https://desktop.github.com/)
- Installa e accedi con il tuo account GitHub

#### 2. Clonare il repo sul tuo Mac
Dopo aver creato il repo su GitHub (via browser, come sopra):
- Apri GitHub Desktop
- Click "File" → "Clone repository"
- Cerca `fridgetalks-landing` nella lista
- Scegli dove salvarlo sul Mac (es. `~/Documents/Proyectos/`)
- Click "Clone"
- ✅ Ora hai una copia locale sul Mac!

#### 3. Fare modifiche
- Apri la cartella del progetto sul Finder (GitHub Desktop ha un pulsante "Open in Finder")
- Modifica i file con il tuo editor preferito (TextEdit, VS Code, ecc.)
- Salva le modifiche

#### 4. "Committare" e "pushare" le modifiche (= pubblicarle)
- Torna a GitHub Desktop
- Vedrai la lista delle modifiche che hai fatto (in rosso/verde)
- In basso a sinistra:
  - Scrivi un **messaggio** che spiega cosa hai fatto (es. "Cambio colore bottone")
  - (Opzionale) Aggiungi una descrizione più lunga
- Click "Commit to main"
- Click "Push origin" (pulsante in alto)
- ✅ Le modifiche sono su GitHub e Vercel le pubblicherà automaticamente!

#### 5. Testare il sito in locale **prima** di pubblicare (avanzato)
Se vuoi vedere come apparirà il sito **prima** di pubblicarlo:
- Apri il Terminal
- Vai alla cartella del progetto: `cd ~/Documents/Proyectos/fridgetalks-landing`
- Prima volta: installa le dipendenze: `npm install`
- Avvia il server locale: `npm run dev`
- Apri il browser e vai a: `http://localhost:5173`
- ✅ Vedi il sito in locale! Ogni modifica si aggiorna automaticamente
- Per fermare il server: `Ctrl + C` nel Terminal

---

## 🤔 Quale scegliere?

### Inizia con **BROWSER** se:
- È il tuo primo progetto con GitHub
- Fai modifiche occasionali (una volta a settimana)
- Vuoi qualcosa semplice e veloce
- Non ti interessa testare in locale

### Passa a **GITHUB DESKTOP** quando:
- Inizi a fare modifiche frequenti
- Vuoi testare il sito in locale prima di pubblicare
- Lavori anche su altri file (grafica, immagini, ecc.) e vuoi sincronizzare tutto insieme
- Vuoi imparare un workflow più professionale

**💡 Consiglio:** inizia con il **browser** per le prime modifiche, poi quando ti senti comoda prova GitHub Desktop. Vale può aiutarti con la transizione!

---

## 📋 Checklist prima di pubblicare su Vercel

Prima di collegare il repo a Vercel, verifica che su GitHub vedi:

- ✅ `package.json` nella radice
- ✅ `index.html` nella radice
- ✅ Cartella `src/` con `App.jsx`, `main.jsx`, `index.css`
- ✅ `README.md` renderizzato in basso (con il testo "🍳 Fridgetalks")
- ✅ Repo è **pubblico** (dicitura "Public" vicino al nome)

Se tutto è ok → sei pronta per Vercel! 🎉

---

## 🆘 Problemi comuni

### "Non vedo il file `.gitignore`"
È normale — i file che iniziano con `.` sono nascosti:
- **Mac:** Finder → `Cmd + Shift + .` (mostra/nasconde file nascosti)
- **GitHub web:** lo vedi nella lista dei file (è lì!)

### "Ho fatto un errore, come torno indietro?"
- **Browser:** vai alla tab "History" del file → click su un commit precedente → "Revert"
- **GitHub Desktop:** click destro sul commit → "Revert this commit"

### "Ho cancellato un file per sbaglio!"
- **Browser:** vai su "History" → trova il commit prima della cancellazione → recupera il file
- **GitHub Desktop:** click destro sul file cancellato → "Discard changes"

### "Vercel non pubblica le modifiche"
- Controlla che il commit sia su GitHub (refresh la pagina del repo)
- Vercel impiega ~2-3 minuti — aspetta e ricarica

---

## 📞 Quando chiedere aiuto a Vale

- Se GitHub ti dà errori strani
- Se Vercel non pubblica correttamente
- Se vuoi fare qualcosa di complesso (es. creare branch, fare merge, ecc.)
- Se vuoi passare al workflow "terminal" e non capisci qualcosa

**Vale è lì per aiutarti!** GitHub può sembrare complicato all'inizio, ma dopo 2-3 modifiche diventa automatico. 💪

---

*Buon lavoro Berta! 🍳 Fridgetalks sarà bellissimo! 🇪🇸*
