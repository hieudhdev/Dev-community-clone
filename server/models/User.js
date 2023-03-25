const mongoose = require('mongoose');
const Scheme = mongoose.Scheme;

const UserSchema = new Schema({
    name : { type: String, required: true },
    username : { type: String, required: true, unique: true, minLength: 6 },
    // email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    avatar: { type: String, default: "" },
    posts: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
    // likes: [{ type: mongoose.Types.ObjectId, ref: 'Like' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    bookmarks: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
})


module.exports = mongoose.model('User', UserSchema);
