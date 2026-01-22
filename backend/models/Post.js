const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
        default: ""
    },
    postImg: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    caption: {
        type: String,
        default: ""
    },
    comments: [{
        text: { type: String, required: true },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        userImg: { type: String, default: "" }
    }]
}, { timestamps: true }
)

module.exports = mongoose.model("Posts", postSchema)