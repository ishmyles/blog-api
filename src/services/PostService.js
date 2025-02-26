import prisma from "../prisma/prismaClient.js";

// Blog Post

const getPosts = async () => await prisma.post.findMany({});

const getPostById = async (id) =>
  await prisma.post.findUnique({
    where: {
      id,
    },
  });

const createNewPost = async (title, content, author, isPublished) =>
  await prisma.post.create({
    data: {
      title,
      content,
      author,
      isPublished,
    },
  });

const updatePostById = async (id, title, content, isPublished) =>
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      isPublished,
    },
  });

const deletePostById = async (id) =>
  await prisma.post.delete({
    where: {
      id,
    },
  });

// Blog Comments

const getCommentsByPostId = async (id) =>
  await prisma.comment.findMany({
    //TODO: Add postID to schema
  });

const getCommentByCommentId = async (id) =>
  await prisma.comment.findUnique({
    where: {
      id,
    },
  });

const createNewComment = async (comment, postId, commentAuthor) =>
  await prisma.comment.create({
    data: {
      comment,
      postId,
      commentAuthor,
    },
  });

const updateCommentById = async (id, comment) =>
  await prisma.comment.update({
    where: {
      id,
    },
    data: {
      comment,
    },
  });

const deleteCommentById = async (id) =>
  await prisma.comment.delete({
    where: {
      id,
    },
  });

export default {
  getPosts,
  getPostById,
  createNewPost,
  updatePostById,
  deletePostById,
  getCommentsByPostId,
  getCommentByCommentId,
  createNewComment,
  updateCommentById,
  deleteCommentById,
};
