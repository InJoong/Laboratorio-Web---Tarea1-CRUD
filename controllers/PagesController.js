let ProductModel = require('../models/Products')

exports.homepage = (req, res) => {
    // Es uns function promesa por lo que se usa then para ejecutarlo una vez que le de resultados
    ProductModel.all().then((data) => {
        let products = data
        res.render('pages/homepage', {products: products})
    })
}

exports.about = (req, res) => {
    res.render('pages/about-us')
}