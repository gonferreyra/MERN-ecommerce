import Product from "../models/Product.js"

export const existsProductById = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error(`Product with id ${id} doesn't exist`);
    }
}