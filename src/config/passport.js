import { Strategy, ExtractJwt } from "passport-jwt";
import prisma from "../prisma/prismaClient.js";

const JwtStrategy = Strategy;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET,
};

const verify = async (jwt_payload, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: jwt_payload.username,
      },
    });

    if (!user) return done(null, false);

    const { username, email, role } = user;
    return done(null, { username, email, role });
  } catch (e) {
    return done(e, false);
  }
};

export default (passport) => {
  const strategy = new JwtStrategy(opts, verify);

  passport.use(strategy);
};
