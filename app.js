import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/posts", routes.postRouter);

app.use("/login", routes.loginRouter);

app.use("/logout", routes.logoutRouter);

app.get("*", (req, res) =>
  res.json({ error: "404 Error: Resource not found." })
);

app.listen(PORT, () => console.log(`Server now listening on PORT ${PORT}`));

// PLANNED ROUTES
/*
    [/login                                      [GET]       - Login form]
    /login                                      [POST]      - Log in user

    /logout                                     [GET]       - Log out user

    /posts                                      [GET]       - All posts
    
    [/posts/new                                  [GET]       - New post form]
    /posts/new                                  [POST]      - Create new post

    [/posts/:postId/update                       [GET]       - Update post form]
    /posts/:postId/update                       [PUT]       - Update post 

    /posts/:postId/delete/                      [DELETE]    - Delete specific post

    /posts/:postId                              [GET]       - Specific post
    /posts/:postId/comments/                    [GET]       - All comments for that post

    /posts/:postId/comments/:commentId/update   [PUT]       - Update specific comment
    /posts/:postId/comments/:commentId/delete   [DELETE]    - Delete specific comment

    *                                           [ALL]       - Catch all (Not Found)
*/
