const { model, Schema } = require('mongoose')

module.exports = model('book', new Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String

}))
