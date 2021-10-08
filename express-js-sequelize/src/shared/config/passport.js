import { CONFIG } from './';
import passport from 'passport';
import JwtStrategy, { ExtractJwt } from 'passport-jwt';
import db from 'models';

export const passportStrategy = () => {
  const { User } = db;
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: CONFIG.JWT_SECRET,
  };
  passport.use(
    new JwtStrategy.Strategy(jwtOptions, async (payload, done) => {
      try {
        const user = await User.findByPk(payload.user.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        throw new Error(err);
      }
    }),
  );
};
