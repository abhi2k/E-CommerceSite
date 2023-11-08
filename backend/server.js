const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

// Read products from the JSON file
const readProducts = () => {
  const productsData = fs.readFileSync('products.json');
  return JSON.parse(productsData);
};

// Save products to the JSON file
const saveProducts = (products) => {
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
};

// Get all products
app.get('/products', (req, res) => {
  const products = readProducts();
  res.json(products);
});

// Get a specific product by ID
app.get('/products/:id', (req, res) => {
  const products = readProducts();
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).send('Product not found');
  } else {
    res.json(product);
  }
});

// Create a new product
app.post('/products', (req, res) => {
  const products = readProducts();
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});

// Update a product
app.put('/products/:id', (req, res) => {
  const products = readProducts();
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    res.status(404).send('Product not found');
  } else {
    products[index] = { ...products[index], ...updatedProduct };
    saveProducts(products);
    res.json(products[index]);
  }
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  const products = readProducts();
  const productId = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    res.status(404).send('Product not found');
  } else {
    products.splice(index, 1);
    saveProducts(products);
    res.status(204).send();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
