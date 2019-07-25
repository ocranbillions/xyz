/* eslint-disable prefer-arrow-callback */
/* eslint-disable indent */
import { Router } from 'express';
import UserController from '../controllers/userController';

import models from '../db/models';

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: '497050994431857',
  clientSecret: '37b58723d649b747c03a3384d177ef28',
  callbackURL: 'http://localhost:3000/api/v1/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'email'],
  },
  function (accessToken, refreshToken, profile, done) {
    const profileUrl = `https://graph.facebook.com/${profile.id}/picture?type=large`
    // console.log(accessToken, profile, refreshToken, profileUrl);
    const user = {
      firstName: 'dfdf',
      lastName: 'dfdf',
      email: profileUrl,
      password: 'hashedPassword'
    };

    models.Users.create(user).then((user) => {
      done(null, profile);
    }).catch((error) => {
      console.log(error);
    })
  }
));

const router = Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.get('/confirmation', UserController.confirmEmail);


router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback',
  passport.authenticate('facebook', function(error, user, info) {
      console.log(error, user, info);
  }));

// router.get('/auth/facebook/callback',
// passport.authenticate('facebook', { successRedirect: '/',
//                                     failureRedirect: '/login' }));

export default router;
