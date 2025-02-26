import PostService from "../services/PostService.js";

// Blog Post

const listPosts = async (req, res) => {
  const posts = await PostService.getPosts();
  return res.json(posts);
};

const listPostById = async (req, res) => {
  const { postId } = req.params;
  const post = await PostService.getPostById(postId).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue retrieving the posts.");
  });

  return res.json(post);
};

const createPost = async (req, res) => {
  const { title, content, isPublished } = req.body;
  const author = "ishmyles"; //TODO: Change once JST is implemented

  const post = await PostService.createNewPost(
    title,
    content,
    author,
    isPublished
  ).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue creating your post.");
  });

  return res.json(post);
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, isPublished } = req.body;

  const post = await PostService.updatePostById(
    postId,
    title,
    content,
    isPublished
  ).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue updating your post.");
  });

  return res.json(post);
};

const deletePost = async (req, res) => {
  const { postId } = req.params;

  const post = await PostService.deletePostById(postId).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue deleting your post.");
  });

  return res.json(post);
};

// Blog Comments

const listPostComments = async (req, res) => {
  const { postId } = req.params;
  const comments = await PostService.getCommentsByPostId(postId).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue retrieving the comments.");
  });

  return res.json(comments);
};

const listCommentById = async (req, res) => {
  const { commentId } = req.params;
  const comment = await PostService.getCommentByCommentId(commentId).catch(
    (e) => {
      console.error(e);
      res.status(400);
      throw new Error("There was an issue retrieving comment data.");
    }
  );

  return res.json(comment);
};

const createPostComment = async (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body;
  const author = "ishmyles"; // TODO: Change once JWT is implemented

  const newComment = await PostService.createNewComment(
    comment,
    postId,
    author
  ).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue creating your comment.");
  });

  return res.json(newComment);
};

const updatePostComment = async (req, res) => {
  const { commentId } = req.params;
  const { comment } = req.body;

  const updatedComment = await PostService.updateCommentById(
    commentId,
    comment
  ).catch((e) => {
    console.error(e);
    res.status(400);
    throw new Error("There was an issue updating your comment.");
  });

  return res.json(updatedComment);
};

const deletePostComment = async (req, res) => {
  const { commentId } = req.params;

  const deletedComment = await PostService.deleteCommentById(commentId).catch(
    (e) => {
      console.error(e);
      res.status(400);
      throw new Error("There was an issue deleting your comment.");
    }
  );

  return res.json(deletedComment);
};

export default {
  listPosts,
  listPostById,
  createPost,
  updatePost,
  deletePost,
  listPostComments,
  listCommentById,
  createPostComment,
  updatePostComment,
  deletePostComment,
};
