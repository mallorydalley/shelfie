module.exports = {
    getInventory: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory()
        .then(result => res.status(200).send(result))
        .catch(err => {
            res.status(500).send('Oops!')
            console.log(err)
        })
    },
    createProduct: (req, res) => {
       const dbInstance = req.app.get('db')
       const {name, price, image_url} = req.body

       dbInstance.create_product([name, price, image_url])
       .then(() => res.sendStatus(200))
       .catch(err => {
           res.status(500).send('Oops!')
           console.log(err)
       })
    },
    editProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {product_id} = req.params
        const {name, price, image_url} = req.body

        dbInstance.edit_product([product_id, name, price, image_url])
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send('Oops!')
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {product_id} = req.params

        dbInstance.delete_product(product_id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            res.status(500).send('Oops!')
            console.log(err)
        })
    }
}