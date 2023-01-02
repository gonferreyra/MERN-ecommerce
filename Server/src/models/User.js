import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE'],
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

// Encrypt password function
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt)
};

// Compare password in login function
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return bcrypt.compare(password, receivedPassword)
};

export default mongoose.model("User", userSchema);