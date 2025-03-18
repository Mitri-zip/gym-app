
const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const memberSchema= new Schema({
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

  pass:{
    type: Number,
    default: 100000
  },

  role:{
    type: String,
    default: 'member'
  }
}, {timestamps: true});

const Member= mongoose.model('Member', memberSchema);
module.exports=Member;