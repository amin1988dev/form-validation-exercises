const fs = require('fs');
const path = require('path');


const distDir = ''; // (sostituisci con il tuo percorso assoluto)


function addJsExtensionToImports(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      addJsExtensionToImports(filePath);
    } else if (file.endsWith('.js')) {   // Modifica solo i file .js   
      let content = fs.readFileSync(filePath, 'utf8');   
      content = content.replace(/(from\s+['"])(\..*?)(['"])/g, '$1$2.js$3'); // Aggiunge .js a tutti gli import/export che non lo hanno
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Aggiunta estensione .js a ${filePath}`);
    }
  });
}

// Aggiungi l'estensione .js a tutti gli import nei file compilati
addJsExtensionToImports(distDir);
