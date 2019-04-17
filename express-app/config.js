module.exports = {
  port: process.env.PORT || 8080,
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/app-express',
  jwtSecret: 'superdupersecret'
}