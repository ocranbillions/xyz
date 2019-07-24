import { Router } from 'express';
import UserController from '../controllers/userController';

import models from '../db/models';

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: '497050994431857',
  clientSecret: '37b58723d649b747c03a3384d177ef28',
  callbackURL: 'http://localhost:3000/api/v1/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken, profile, refreshToken);
    // User.findOrCreate(..., function(err, user) {
    //     if (err) { return done(err); }
    //     done(null, user);
    //   });
  }
));

const router = Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.get('/confirmation', UserController.confirmEmail);


router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/signin' }));

export default router;
