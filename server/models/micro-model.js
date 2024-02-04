const mongoose = require('mongoose');
const { Schema } = mongoose;

const microSchema = new Schema({
  name: String,
  items: {
    type: [this],
    default: undefined,
  },
}, { _id: false });

module.exports = mongoose.model('micro', microSchema);