import passport from 'passport';
import { ErrorResponse } from 'shared/utils/errorResponse';

const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, payload, info) => {
    if (err) {
      next(err);
    }
    if (!payload) {
      return next(new ErrorResponse(info?.message || 'Invalid Token', 400));
    }
    req.user = payload;
    next();
  })(req, res, next);
};

export default authenticate;
