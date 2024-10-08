const express = require('express');
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.js")();
const router = jsonServer.router(db);

// Función para obtener la URL del servidor dinámicamente
const getServerUrl = (req) => {
  const isLocal = req.get('host').includes('localhost') || req.get('host').includes('127.0.0.1');
  const protocol = isLocal ? 'http' : 'https';
  return `${protocol}://${req.get('host')}`;
};

// Función para prepend la URL del servidor a las rutas de imágenes
const prependServerUrl = (serverUrl, imagePath) => {
  if (imagePath.startsWith('http')) return imagePath; // Ya es una URL completa
  return `${serverUrl}/${imagePath}`;
};

// Middleware para modificar las rutas de imágenes
server.use((req, res, next) => {
  const serverUrl = getServerUrl(req);
  
  // Modificar las rutas de imágenes en productsPLP
  if (db.productsPLP) {
    db.productsPLP = db.productsPLP.map(category => ({
      ...category,
      products: category.products.map(product => ({
        ...product,
        image: prependServerUrl(serverUrl, product.image)
      }))
    }));
  }

  if (db.adImage) {
    db.adImage = db.adImage.map(ad => ({
      ...ad,
      image: prependServerUrl(serverUrl, ad.image)
    }));
  }
  
  if (db.homepageItems) {
    db.homepageItems = db.homepageItems.map(item => ({
      ...item,
      image: prependServerUrl(serverUrl, item.image)
    }));
  }
  
  next();
});

// Configurar el middleware para servir archivos estáticos desde la carpeta 'images'
server.use("/images", express.static(path.join(__dirname, "data/images")));

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
