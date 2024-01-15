const db = require('./db');

// Operación Create (Crear)
async function createDato(req, res) {
  const nuevoDato = req.body;

  try {
    const result = await db.query('INSERT INTO tareas (materia_id, descripcion) VALUES ($1, $2) RETURNING *', [nuevoDato.materia_id, nuevoDato.descripcion]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al crear dato:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

// Operación Read (Leer)
async function getDatos(req, res) {
  try {
    console.log('Antes de la consulta a la base de datos');
    const result = await db.query('SELECT * FROM vista_tareas');
    console.log('Después de la consulta a la base de datos');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).json({ mensaje: `Error interno del servidor: ${error.message}` });
  }
}


// Operación Update (Actualizar)
async function updateDato(req, res) {
  const id = parseInt(req.params.id);
  const nuevosDatos = req.body;

  try {
    const result = await db.query('UPDATE tu_tabla SET nombre = $1 WHERE id = $2 RETURNING *', [nuevosDatos.nombre, id]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ mensaje: 'Dato no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar dato por ID:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

// Operación Delete (Eliminar)
async function deleteDato(req, res) {
  const id = parseInt(req.params.id);

  try {
    const result = await db.query('DELETE FROM tu_tabla WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length > 0) {
      res.json({ mensaje: 'Dato eliminado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Dato no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar dato por ID:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports = { createDato, getDatos, updateDato, deleteDato };

