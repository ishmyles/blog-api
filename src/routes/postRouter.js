import { Router } from "express";
import controller from "../controllers/index.js";
import asyncWrapper from "express-async-handler";

const { postController } = controller;

const postRouter = Router();

// Blog

postRouter.get("/", asyncWrapper(postController.listPosts));

postRouter.post("/new", asyncWrapper(postController.createPost));

postRouter.get("/:postId", asyncWrapper(postController.listPostById));

postRouter.put("/:postId/update", asyncWrapper(postController.updatePost));

postRouter.delete("/:postId/delete", asyncWrapper(postController.deletePost));

// Blog Comments

postRouter.get(
  "/:postId/comments",
  asyncWrapper(postController.listPostComments)
);

postRouter.post(
  "/:postId/comments",
  asyncWrapper(postController.createPostComment)
);

postRouter.get(
  "/:postId/comments/:commentId",
  asyncWrapper(postController.listCommentById)
);

postRouter.put(
  "/:postId/comments/:commentId/update",
  asyncWrapper(postController.updatePostComment)
);

postRouter.delete(
  "/:postId/comments/:commentId/delete",
  asyncWrapper(postController.deletePostComment)
);

export default postRouter;
