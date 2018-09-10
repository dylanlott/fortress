import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { ServerError } from 'express-server-error'

const cardSchema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String,
    require: true,
    minlength: 1
  },
  user: {
    type: String,
    required: true
  },
  archived: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String
  }]
}, {
  timestamps: true
})

const Card = mongoose.model('Card', cardSchema)

export default Card
