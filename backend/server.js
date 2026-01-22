const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const bcrypt = require("bcrypt");
const Post = require("./models/Post")
const jwt = require("jsonwebtoken")
const User = require("./models/User")
const app = express()
const auth = require("./middleware/auth")
const upload = require("./middleware/upload");

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json()) //

mongoose.connect(process.env.MONGO_URI) //
  .then(() => {
    console.log('MongoDB connected')
  }).catch(err => console.log(err))


app.get("/", (req, res) => {
  res.send("Backend running")
})

app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        bio: user.bio,
        userImg: user.userImg,
        followers: user.followers.length,
        following: user.following.length
      }
    })
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
})

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ error: "User not found" })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ error: "Wrong password" })

    const token = jwt.sign({
      id: user._id,
      username: user.username
    },
      process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || "7d" }
    )
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        bio: user.bio,
        userImg: user.userImg,
        followers: user.followers.length,
        following: user.following.length
      }
    })
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }

})

app.post("/api/posts", auth, upload.single("image"), async (req, res) => {
  try {
    const post = await Post.create({
      user: req.user.id,
      username: req.user.username,
      userImg: req.body.userImg || "",
      postImg: req.file.path,
      caption: req.body.caption
    })

    res.json(post)

  } catch (err) {
    console.error("POST ERROR:", err);
    res.status(400).json({ error: err.message || err })
  }
});


app.get("/api/posts", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 })
  res.json(posts)

})

app.post("/api/posts/:id/comment", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.comments.push({
      text: req.body.text,
      username: req.user.username,
      userImg: req.user.userImg
    });

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/posts/:id/like", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  const userId = req.user.id;

  console.log("Before:", post.likes);

  const alreadyLiked = post.likes.some(id => id.toString() === userId);

  if (alreadyLiked) {
    post.likes = post.likes.filter(id => id.toString() !== userId);
  } else {
    post.likes.push(userId);
  }
  await post.save();

  console.log("After:", post.likes);

  res.json({
    liked: !alreadyLiked,
    likes: post.likes
  });
});



app.post("/api/users/:id/follow", auth, async (req, res) => {
  try {
    const targetUser = await User.findById(req.params.id);
    const me = await User.findById(req.user.id);

    if (!targetUser) return res.status(404).json("User not found");

    const isFollowing = me.following.includes(targetUser._id);

    if (isFollowing) {

      me.following = me.following.filter(id => id.toString() !== targetUser._id.toString());
      targetUser.followers = targetUser.followers.filter(id => id.toString() !== me._id.toString());
    } else {

      me.following.push(targetUser._id);
      targetUser.followers.push(me._id);
    }

    await me.save();
    await targetUser.save();

    res.json({
      followed: !isFollowing,
      followersCount: targetUser.followers.length
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/users/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put(
  "/api/users/:id",
  auth,
  upload.single("userImg"),
  async (req, res) => {
    if (req.user.id !== req.params.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const updateData = {
      username: req.body.username,
      name: req.body.name,
      bio: req.body.bio
    };

    if (req.file) {
      updateData.userImg = req.file.path;
      await Post.updateMany(
          { user: req.user.id },
          { userImg: req.file.path }
        );
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    ).select("-password");

    res.json(user);
  }
);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Connected to Port ${PORT}`))