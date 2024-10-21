const fs = require('fs');
const path = require('path');

// Percorso alla directory dist (sostituisci con il tuo percorso assoluto)
const distDir = 'C:/Users/amin.maqsudul/Desktop/MIO/ESERCIZI LARAVEL/form-validation-exercises/dist';

// Funzione che aggiorna gli import ed export
function addJsExtensionToImports(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Ricorsione se è una directory
      addJsExtensionToImports(filePath);
    } else if (file.endsWith('.js')) {
      // Modifica solo i file .js
      let content = fs.readFileSync(filePath, 'utf8');
      // Aggiunge .js a tutti gli import/export che non lo hanno
      content = content.replace(/(from\s+['"])(\..*?)(['"])/g, '$1$2.js$3');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Aggiunta estensione .js a ${filePath}`);
    }
  });
}

// Aggiungi l'estensione .js a tutti gli import nei file compilati
addJsExtensionToImports(distDir);
