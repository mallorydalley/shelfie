require('dotenv').config()
const express = require('express');
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller.js')

const app = express();

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('DB connected')
    })
    .catch(err => console.log(err))

app.use(express.json());

app.get(`/api/product`, ctrl.getProduct)
app.get(`/api/inventory`, ctrl.getInventory)
app.post(`/api/product`, ctrl.createProduct)
app.put(`/api/product/:product_id`, ctrl.editProduct)
app.delete(`/api/product/:product_id`, ctrl.deleteProduct)

const port = SERVER_PORT
app.listen (port, () => console.log(`Server is listening on ${port}`))