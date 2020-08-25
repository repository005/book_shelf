const config = {
  production: {
    SECRET: process.env.SECRET,
    database: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'SUPERSERCRETPASSWORD123',
    database: 'mongodb://localhost:27017/booksShelf'
  }
}

exports.get = function get(env){
  return config[env] || config.default;
}