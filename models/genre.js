var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genre = new Schema(
    {
        
        name: {type: String, required: true, maxLength: 100, minlength: 3 },

      }
    );

genre
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('genre', genre);