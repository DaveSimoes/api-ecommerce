const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart();
    }

    const itemIndex = cart.products.findIndex(p => p.product.toString() === req.body.productId);
    if (itemIndex > -1) {
      cart.products[itemIndex].quantity += req.body.quantity;
    } else {
      cart.products.push({ product: req.body.productId, quantity: req.body.quantity });
    }

    cart.total += product.price * req.body.quantity;
    await cart.save();

    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.products.findIndex(p => p.product.toString() === req.body.productId);
    if (itemIndex > -1) {
      cart.total -= cart.products[itemIndex].quantity * product.price;
      cart.products.splice(itemIndex, 1);
      await cart.save();
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
