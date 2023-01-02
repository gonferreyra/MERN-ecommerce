import mongoose from "mongoose";

const roleSchema = mongoose.Schema({
    rol: {
        type: String,
        required: [true, "Rol is required"]
    }
});

export default mongoose.model("Role", roleSchema);
