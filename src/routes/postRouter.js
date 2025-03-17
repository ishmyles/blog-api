import { Router } from "express";
import controller from "../controllers/index.js";
import asyncWrapper from "express-async-handler";
import passport from "passport";

const { postController } = controller;

const postRouter = Router();

// Blog

postRouter.get("/", asyncWrapper(postController.listPosts));

postRouter.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  asyncWrapper(postController.createPost)
);

postRouter.get("/:postId", asyncWrapper(postController.listPostById));

postRouter.put(
  "/:postId/update",
  passport.authenticate("jwt", { session: false }),
  asyncWrapper(postController.updatePost)
);

postRouter.delete(
  "/:postId/delete",
  passport.authenticate("jwt", { session: false }),
  asyncWrapper(postController.deletePost)
);

// Blog Comments

postRouter.get(
  "/:postId/comments",
  asyncWrapper(postController.listPostComments)
);

postRouter.post(
  "/:postId/comments",
  passport.authenticate("jwt", { session: false }),
  asyncWrapper(postController.createPostComment)
);

postRouter.get(
  "/:postId/comments/:commentId",
  asyncWrapper(postController.listCommentById)
);

postRouter.put(
  "/:postId/comments/:commentId/update",
  passport.authenticate("jwt", { session: false }),
  asyncWrapper(postController.updatePostComment)
);

postRouter.delete(
  "/:postId/comments/:commentId/delete",
  passport.authenticate("jwt", { session: false }),
  asyncWrapper(postController.deletePostComment)
);

export default postRouter;
