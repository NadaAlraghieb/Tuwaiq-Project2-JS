const mongoose = require("mongoose");
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    nationalId: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role:{type: mongoose.SchemaTypes.ObjectId, ref:"Role"}
})

// encrypting the password before saving any new user into the database
userSchema.pre("save", async function(){
    this.nationalId = this.nationalId;
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports.User = mongoose.model("User", userSchema);

