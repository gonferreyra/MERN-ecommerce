import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required"],
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 2
    },
    imgUrl: {
        type: String
    },
    info: {
        type: String,
        required: true
    }
},
    {
        // Nos da al dato de cuando se creo y cuando se modifico
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Product', productSchema);