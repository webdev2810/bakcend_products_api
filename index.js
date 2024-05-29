const bodyParser = require('body-parser');

const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


const products  = require("./productData.json")
const singleApiData = require("./singleProductData.json");


app.get("/", (req, res) => {
  res.send("Now, Productss are live")
});

app.get("/api/products", (req, res) => {
  res.send(products)
})


app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = singleApiData.find(p => p.id === productId);
  
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ error: 'Product not found' });
    }
  });

app.listen(port, () => {
  console.log(`Footy API Keys listening on port ${port}`);
});


