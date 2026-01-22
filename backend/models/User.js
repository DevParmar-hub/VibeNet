const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    name:{type:String, default:""},
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    userImg: { type: String, default: "" },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]

}
    , { timestamps: true })

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
}
module.exports = mongoose.model("User", userSchema)