const express = require('express');
const path = require('path');
const fs = require('fs'); // Módulo para interagir com o sistema de arquivos
const app = express();

// --- CÓDIGO DE DIAGNÓSTICO ---
try {
  const currentDirectory = path.resolve(__dirname);
  console.log('--- INÍCIO DO DIAGNÓSTICO DE ARQUIVOS ---');
  console.log('O servidor acredita que está rodando no diretório:', currentDirectory);
  
  const filesAndFoldersInRoot = fs.readdirSync(currentDirectory);
  console.log('Arquivos e Pastas que ele vê ao redor dele:', filesAndFoldersInRoot);

  const publicFolderPath = path.join(currentDirectory, 'public');
  console.log('Tentando olhar dentro da pasta public em:', publicFolderPath);
  
  const filesInPublic = fs.readdirSync(publicFolderPath);
  console.log('Arquivos encontrados dentro da pasta public:', filesInPublic);
  console.log('--- FIM DO DIAGNÓSTICO ---');
} catch (error) {
  console.error('--- ERRO DURANTE O DIAGNÓSTICO ---:', error);
}
// --- FIM DO CÓDIGO DE DIAGNÓSTICO ---

// O resto do nosso código continua igual
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor Ankaa HLTB Widget (MODO DIAGNÓSTICO) está no ar!');
});
