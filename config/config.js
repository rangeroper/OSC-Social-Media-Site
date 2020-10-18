const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || 'localhost') + 'brandon:gunsammo92@osc-db-shard-00-00.3m16e.mongodb.net:27017,osc-db-shard-00-01.3m16e.mongodb.net:27017,osc-db-shard-00-02.3m16e.mongodb.net:27017/test?replicaSet=atlas-zdnnpy-shard-0&ssl=true&authSource=admin' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config
