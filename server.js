const express = require('express');
const fs = require('fs');
const { join } = require('path');
const app = express();

const port = 3000;


const cors = require('cors');

app.use(cors());



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
app.get('/usercart', (req, res) => {
  const jsonDirectorycatsuser_cart = './jsons/user_cart';
  const jsonDatacats1 = cargarJSON(jsonDirectorycatsuser_cart);
  res.json(jsonDatacats1);
});




////////////////////////

app.use(express.json());

// app.post('/usercart', (req, res) => {
  
//   const requestData = req.body;
//   // Ruta para manejar solicitudes POST en "/usercart"
//   // Datos del nuevo post
//   const nuevoPost = {
//     "id": requestData.id,
//     "name": requestData.name,
//     "count": requestData.count,
//     "unitCost": requestData.unitCost,
//     "currency": requestData.currency,
//     "image": requestData.image
//   };
  
//   // Ruta del archivo JSON
//   const filePath = './jsons/user_cart';
  
  // Lee el contenido actual del archivo JSON
  // fs.readFile(filePath, 'utf8')
  //   .then(data => {
  //     const posts = JSON.parse(data);
  
  //     // Agrega el nuevo post al array de posts
  //     posts.push(nuevoPost);
  
  //     // Guarda el JSON modificado en el mismo archivo
  //     return fs.writeFile(filePath, JSON.stringify(posts, null, 2), 'utf8');
  //   })
  //   .then(() => {
  //     console.log('Nuevo post agregado con éxito');
  //   })
  //   .catch(error => {
  //     console.error('Error al agregar el nuevo post:', error);
  //   });
  
  
  // })


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

// app.post('/usercart', (req, res) => {
//   // Cargar el contenido del archivo JSON
//   const filePath = './user_cart/';
//   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));


//   // Aquí puedes realizar modificaciones en el JSON según los datos de la solicitud POST
//   const requestData = req.body;
//   console.log('Datos recibidos:', requestData);

//   // Ejemplo: Agregar un nuevo producto al arreglo de productos

//   console.log(requestData.id)
//   const nuevoProducto = {
//             "id": requestData.id,
//             "name": requestData.name,
//             "count": requestData.count,
//             "unitCost": requestData.unitCost,
//             "currency": requestData.currency,
//             "image": requestData.image
//   };
//   jsonData.articles.push(nuevoProducto);

//   // Guardar el JSON modificado de nuevo en el archivo
//   fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');


//   // Puedes enviar una respuesta al cliente
//   res.status(200).json({ message: 'Solicitud POST recibida con éxito' });
// });



app.post("/usercart", (req, res) => {
    
      const postData = req.body;
  
      // Lee el contenido actual del archivo JSON
      // const fileContent = fs.readFileSync('./jsons/user_cart/25801.json', 'utf8');
      // let posts = JSON.parse(fileContent);
  
      // // Agrega el nuevo post al array de posts
      // let Array = [...posts, postData];
      
      
      // Guarda el JSON modificado en el mismo archivo
      fs.writeFileSync('./jsons/user_cart/25801.json')
  
      // Envía una respuesta al cliente
      res.status(201).json({ message: 'Solicitud POST recibida con éxito', data: postData });
     
  });
  






app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/usercart`);
});

