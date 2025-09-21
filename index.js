const express = require('express');
const path = require('path');
const app = express();

// A LINHA MÁGICA QUE FALTAVA:
// Esta linha ensina o servidor a encontrar QUALQUER arquivo (imagens, etc.) que está na mesma pasta.
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor Ankaa HLTB Widget (Versão Final Corrigida) está no ar!');
});