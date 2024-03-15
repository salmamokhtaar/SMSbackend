const mongoose = require('mongoose');
const documentSchema = mongoose.Schema({
    file: {
        type: String,
        required: true
    }
  },
  {timeStamps:true}
  )

  module.exports = mongoose.model('Document', documentSchema)