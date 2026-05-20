Esercizio
 
1) 
Creiare la prima applicazione con NodeJs e inizializziamola con il comando:
    pnpm init --init-type=module

2) 
Scrivere un file index.js che dovrà stampare nel terminale “Hello World”. 
Provare ad eseguirlo dal terminale stesso usando i comandi di node base:
    node 'nomeDelFile.js'

3) 
Impostare uno script "start" in package.json, dopodichè lanciare lo script con il comando:
    pnpm start

4) 
Impostare un nuovo script "watch" in package.json che possa essere lanciato con il comando:
    pnpm watch     ---> (deve aggiornare in tempo reale le modifiche ai nostri file)
Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.

• Bonus
-------
Proviamo a modificare la nostra app Node, in modo da passare dal terminale una frase diversa da “Hello Boolean”. Ci ricordiamo la variabile process.argv  

• Super Bonus 🦸
----------------
Creiamo nel nostro file un array di stringhe.
Importiamo la libreria cowsayjs (ormai siamo bravi a importare cose) nel nostro programma e facciamoci stampare a caso una delle frasi nel nostro array.

• Iper Bonus 🧠 
---------------
Come da live coding stamani, utilizziamo Claude per generarci una barzelletta da fare dire alla nostra mucca.
 
