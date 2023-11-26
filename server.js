const express = require('express');
const fs = require('fs');
const { join } = require('path');
const path = require('path');
const app = express();

const port = 3000;


const cors = require('cors');
app.use(cors());
app.use(express.json())


function cargarJSON(jsonDirectory) {
  try {
    // Lee los nombres de los archivos en el directorio
    const files = fs.readdirSync(jsonDirectory);

    // Filtra los archivos que terminan con '.json'
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Lee y parsea cada archivo JSON
    const jsonData = jsonFiles.map(file => {
      const filePath = join(jsonDirectory, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8')) ;
      return data
    });

    return jsonData;
  } catch (error) {
    console.error('Error al cargar archivos JSON:', error.message);
    return [];
  }
}

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// app.use(cors({
//   origin: 'http://127.0.0.1:5501', // Reemplaza con la URL de tu aplicación cliente
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Habilita el intercambio de cookies y credenciales
//   optionsSuccessStatus: 204,
// }));





app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});



app.get('/cats', (req, res) => {
  const jsonDirectorycats = './jsons/cats';
  const jsonDatacats = cargarJSON(jsonDirectorycats);
  res.json(jsonDatacats);

});


app.get('/cats_products', (req, res) => {
  const jsonDirectorycats_products = './jsons/cats_products';
  const jsonDatacats1 = cargarJSON(jsonDirectorycats_products);
  res.json(jsonDatacats1);
});
app.get('/products', (req, res) => {
  const jsonDirectoryproducts = './jsons/products';
  const jsonDatacats1 = cargarJSON(jsonDirectoryproducts);
  res.json(jsonDatacats1);
});
app.get('/products_comments', (req, res) => {
  const jsonDirectoryproductscomments = './jsons/products_comments';
  const jsonDatacats1 = cargarJSON(jsonDirectoryproductscomments);
  res.json(jsonDatacats1);
});
app.get('/sell', (req, res) => {
  const jsonDirectorycats_sell = './jsons/sell';
  const jsonDatacats1 = cargarJSON(jsonDirectorycats_sell);
  res.json(jsonDatacats1);
});
app.get('/user_cart', (req, res) => {
  const jsonDirectorycatsuser_cart = './jsons/user_cart';
  const jsonDatacats1 = cargarJSON(jsonDirectorycatsuser_cart);
  res.json(jsonDatacats1);
});




////////////////////////



const directorio = './jsons/products_comments';

app.get('/products_comments/:nombreArchivo', (req, res) => {
  const { nombreArchivo } = req.params;

  // Hacer algo con el nombre del archivo recibido en la ruta
  // Por ejemplo, puedes buscar ese archivo en el directorio
  const rutaCompleta = `${directorio}/${nombreArchivo}`;

  // Aquí puedes realizar operaciones con el archivo, como leer su contenido, enviarlo como respuesta, etc.
  // Por ejemplo, si quieres enviar el archivo como respuesta:
  fs.readFile(rutaCompleta, (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).send('Error al leer el archivo');
      return;
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  });
});


const directorio2 = './jsons/products';
app.get('/products/:nombreArchivo', (req, res) => {
  const { nombreArchivo } = req.params;

  // Hacer algo con el nombre del archivo recibido en la ruta
  // Por ejemplo, puedes buscar ese archivo en el directorio
  const rutaCompleta = `${directorio2}/${nombreArchivo}`;

  // Aquí puedes realizar operaciones con el archivo, como leer su contenido, enviarlo como respuesta, etc.
  // Por ejemplo, si quieres enviar el archivo como respuesta:
  fs.readFile(rutaCompleta, (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).send('Error al leer el archivo');
      return;
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  });
});
const directorio3 = './jsons/cats_products';
app.get('/cats_products/:nombreArchivo', (req, res) => {
  const { nombreArchivo } = req.params;

  // Hacer algo con el nombre del archivo recibido en la ruta
  // Por ejemplo, puedes buscar ese archivo en el directorio
  const rutaCompleta = `${directorio3}/${nombreArchivo}`;

  // Aquí puedes realizar operaciones con el archivo, como leer su contenido, enviarlo como respuesta, etc.
  // Por ejemplo, si quieres enviar el archivo como respuesta:
  fs.readFile(rutaCompleta, (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      res.status(500).send('Error al leer el archivo');
      return;
    }
    res.setHeader('Content-Type', 'text/plain');
    res.send(data);
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
