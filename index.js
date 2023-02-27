const express = require('express');
const app = express();

const productRoutes = require('./views/productRoutes');
const categoriasRoutes = require('./views/categoriasRoutes');

app.use(productRoutes);
app.use(categoriasRoutes);

const PORT = 3000;

app.listen(PORT,  () => console.log('Server running on port: '+ PORT));