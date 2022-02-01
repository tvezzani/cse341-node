const Product = require('../models/product');
const Order = require('../models/order');

exports.getProducts = (req, res, next) => {
<<<<<<< HEAD
  Product.fetchAll()
=======
  Product.find()
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
    .then(products => {
      console.log(products);
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
<<<<<<< HEAD
  Product.fetchAll()
=======
  Product.find()
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
<<<<<<< HEAD
    .getCart()
    .then(products => {
=======
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items;
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products
      });
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      res.redirect('/cart');
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
<<<<<<< HEAD
    .deleteItemFromCart(prodId)
=======
    .removeFromCart(prodId)
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
<<<<<<< HEAD
    .addOrder()
    .then(result => {
=======
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user
        },
        products: products
      });
      return order.save();
    })
    .then(result => {
      return req.user.clearCart();
    })
    .then(() => {
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
      res.redirect('/orders');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
<<<<<<< HEAD
  req.user
    .getOrders()
=======
  Order.find({ 'user.userId': req.user._id })
>>>>>>> 0dbb3c830334e8b44155375fde73d723fc546dd9
    .then(orders => {
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders
      });
    })
    .catch(err => console.log(err));
};
