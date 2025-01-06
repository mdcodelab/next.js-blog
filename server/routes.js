const express = require("express");
const router = express.Router();
const Blog = require("./blogSchema");

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Create new blog
router.post("/", async (req, res) => {
  try {
    const { image, title, content } = req.body; 
    const blog = await Blog.create({ image, title, content });
    res.status(201).json({ blog });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a blog based on title or id
router.put("/", async (req, res) => {
  try {
    const { id, title, image, content } = req.body;

    // Condiția pentru identificarea blogului: ID sau titlu
    const filter = id ? { _id: id } : { title };

    // Actualizare
    const updatedBlog = await Blog.findOneAndUpdate(
      filter,
      { image, title, content },
      { new: true, runValidators: true } // Returnează blogul actualizat
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a blog based on title or id
router.delete("/", async (req, res) => {
  try {
    const { id, title } = req.body;

    // Condiția pentru identificarea blogului: ID sau titlu
    const filter = id ? { _id: id } : { title };

    // Ștergere
    const deletedBlog = await Blog.findOneAndDelete(filter);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
