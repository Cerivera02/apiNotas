const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importa cors
const { createDato, getDatos, updateDato, deleteDato, getDatoPorId, getMaterias, contarTareas} = require('./controllers');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());  // Habilita CORS
app.use(bodyParser.json());

app.post('/api/datos', createDato);
app.get('/api/datos', getDatos);
app.get('/api/datos/:id', getDatoPorId);
app.put('/api/datos/:id', updateDato);
app.delete('/api/datos/:id', deleteDato);
app.get('/api/materias', getMaterias);
//contar tareas
app.get('/api/tareas', contarTareas);
app.listen(port, () => {
  console.log(`Servidor Iniciado correctamente :)`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const { createDato, getDatos, updateDato, deleteDato } = require('./controllers');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/api/datos', createDato);
// app.get('/api/datos', getDatos);
// app.put('/api/datos/:id', updateDato);
// app.delete('/api/datos/:id', deleteDato);

// app.listen(port, () => {
//   console.log(`Servidor Iniciado correctamente :)`);
// });

