const Product = require('../models/product');

/**
 * Controller used to render the form
 * @param req object Request
 * @param res object Response
 * @param next fn used to path control to the next middleware
 */
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        // 'shop/index' path of the view
        res.render('admin/product-list', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
};


/**
 * Controller used to add a product
 * @param req
 * @param res
 * @param next
 */
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};
