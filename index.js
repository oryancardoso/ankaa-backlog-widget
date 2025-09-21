const express = require('express');
const path = require('path');
const app = express();

// A LINHA DECISIVA:
// Ensina o servidor a encontrar e entregar arquivos da pasta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor Ankaa HLTB Widget (Versão Finalíssima) está no ar!');
});
