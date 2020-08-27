let ProductModel = require('../models/Products')

exports.create = (req, res) => {
    res.render('products/create')
}

exports.store = (req, res) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    
    ProductModel.create(product).then((id) => {
        res.redirect('/')
    })
}

exports.show = (req, res) => {
    let id = req.params.id

    ProductModel.find(id).then((product) => {
        if(product == null) {
            res.status(404).send('Not Found: 404')
            return
        }

        res.render('products/show', {product: product})
    })
}

exports.edit = (req, res) => {
    let id = req.params.id

    ProductModel.find(id).then((product) => {
        if(product == null) {
            res.status(404).send('Not Found: 404')
            return
        }

        res.render('products/edit', {product: product})
    })
}

exports.update = (req, res) => {
    let id = req.params.id

    ProductModel.find(id).then((product) => {
        if(product == null) {
            res.status(404).send('Not Found: 404')
            return
        }

        let updateProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
    
        ProductModel.update(product.id, updateProduct).then((id) => {
            res.redirect('/products/' + product.id)
        })
    })
}

exports.delete = (req, res) => {
    let id = req.params.id

    ProductModel.find(id).then((product) => {
        if(product == null){
            res.status(404).send('Not Found: 404')
            return
        }

        ProductModel.delete(id).then((id) => {
            res.redirect('/')
        })
    })
}