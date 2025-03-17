import express from "express";
import routes from "./routes/index.js";
import passport from "passport";
import passportConfig from "./config/passport.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

passportConfig(passport);

app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    console.log(req.headers);
    return res.json({ msg: "success" });
  }
);

app.use("/posts", routes.postRouter);

app.use("/signup", routes.signupRouter);

app.use("/login", routes.loginRouter);

app.use("/logout", routes.logoutRouter);

app.use("/user", routes.userRouter);

app.use("/profiles", routes.profileRouter);

app.use("/refresh_auth", routes.refreshRouter);

app.all("*", (req, res) =>
  res.json({
    error: {
      type: "404 Error",
      message: "The requested URL was not found.",
    },
  })
);

app.use((err, req, res, next) => {
  if (res.statusCode !== 400) res.status(500);
  return res.json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server now listening on PORT ${PORT}`));
