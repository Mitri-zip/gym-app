
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const vibeSchema= new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },

  role:{
    type: String,
    default: 'vibes'
  }
}, {timestamps: true});

const Vibe= mongoose.model('Vibe', vibeSchema);
module.exports=Vibe;