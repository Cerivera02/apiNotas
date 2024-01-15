const express = require('express');
const bodyParser = require('body-parser');
const { createDato, getDatos, updateDato, deleteDato } = require('./controllers');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/datos', createDato);
app.get('/api/datos', getDatos);
app.put('/api/datos/:id', updateDato);
app.delete('/api/datos/:id', deleteDato);

app.listen(port, () => {
  console.log(`Servidor Iniciado correctamente :)`);
});

