const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises; // Usa la versión asincrónica de fs
const path = require('path');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

function cargarJSON(jsonDirectory) {
  try {
    const files = fs.readdirSync(jsonDirectory);
    const jsonFiles = files.filter((file) => file.endsWith('.json'));
    const jsonData = jsonFiles.map((file) => {
      const filePath = path.join(jsonDirectory, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return data;
    });

    return jsonData;
  } catch (error) {
    console.error('Error al cargar archivos JSON:', error.message);
    return [];
  }
}

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

app.use(express.json());

app.post('/usercart', async (req, res) => {
  try {
    // Lee el contenido del archivo JSON de forma asincrónica
    const userCartFilePath = './jsons/user_cart/25801.json';
    let jsonData = [];
    try {
      const fileContent = await fs.readFile(userCartFilePath, 'utf8');
      jsonData = JSON.parse(fileContent);
    } catch (error) {
      // Maneja el error solo si el archivo no existe
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    // Realiza modificaciones en el JSON según los datos de la solicitud POST
    const requestData = req.body;
    console.log('Datos recibidos:', requestData);

    // Ejemplo: Agregar un nuevo producto al arreglo de productos
    const nuevoProducto = {
      id: requestData.id,
      name: requestData.name,
      count: requestData.count,
      unitCost: requestData.unitCost,
      currency: requestData.currency,
      image: requestData.image,
    };
    jsonData.articles.push(nuevoProducto);

    // Guarda el JSON modificado de nuevo en el archivo de forma asincrónica
    await fs.writeFile(userCartFilePath, JSON.stringify(jsonData, null, 2), 'utf8');

    // Envía una respuesta al cliente
    res.status(200).json({ message: 'Solicitud POST recibida con éxito' });
  } catch (error) {
    console.error('Error al procesar la solicitud POST:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
