const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const config = require('./config')

module.exports = passport => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
  }

  passport.use(new JwtStrategy(opts, (payload, done) => {
    done(null, payload.userId)
  }))
}