import { Router } from "express";
import controller from "../controllers/index.js";

const { postController } = controller;

const postRouter = Router();

// Blog

postRouter.get("/", postController.listPosts);

postRouter.post("/new", postController.createPost);

postRouter.get("/:postId", postController.listSpecificPost);

postRouter.put("/:postId/update", postController.updatePost);

postRouter.delete("/:postId/delete", postController.deletePost);

// Blog Comments

postRouter.get("/:postId/comments", postController.listPostComments);

postRouter.put(
  "/:postId/comments/:commentId/update",
  postController.updatePostComment
);

postRouter.delete(
  "/:postId/comments/:commentId/delete",
  postController.deletePostComment
);

export default postRouter;
