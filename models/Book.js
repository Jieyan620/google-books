const { model, Schema } = require('mongoose')

module.exports = model('book', new Schema({
  gId:String,
  title: String,
  authors: String,
  description: String,
  image: String,
  publishedDate: String,
  pageCount: String,
  publisher: String
}))
