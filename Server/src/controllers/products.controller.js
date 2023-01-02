import { request, response } from 'express';
import Product from '../models/Product.js';

export const getProducts = async (req = request, res = response) => {
    const products = await Product.find();
    return res.json(products)
};

export const createProducts = async (req = request, res = response) => {

    try {
        const { name, category, price, stock, info, imgUrl } = req.body;

        const product = await Product.findOne({ name });

        if (product) {
            return res.status(400).json({
                msg: `Product ${product} already exists`
            });
        }

        // Data to save
        const newProduct = new Product({
            name,
            category,
            price,
            stock,
            imgUrl,
            info
        });

        // Save DB
        const productSaved = await newProduct.save();

        res.status(200).json(productSaved);

    } catch (error) {
        return res.status(500).json(error)
    }
};

export const updateProductById = async (req, res) => {

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updateProduct)

}

export const deleteProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json(product)
}