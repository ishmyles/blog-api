// Blog Post

const listPosts = (req, res) => res.send("TODO: List blog posts in DB");

const listSpecificPost = (req, res) =>
  res.send("TODO: List specific post from DB");

const createPost = (req, res) => res.send("TODO: Save new post to DB");

const updatePost = (req, res) => res.send("TODO: Update existing post in DB");

const deletePost = (req, res) => res.send("TODO: Delete existing post in DB");

// Blog Comments

const listPostComments = (req, res) => res.send("TODO: List blog's comments");

const updatePostComment = (req, res) =>
  res.send("TODO: Update existing blog comment in DB");

const deletePostComment = (req, res) =>
  res.send("TODO: Delete existing blog comment in DB");

export default {
  listPosts,
  listSpecificPost,
  createPost,
  updatePost,
  deletePost,
  listPostComments,
  updatePostComment,
  deletePostComment,
};
