import mongoose from 'mongoose'
import uuid from 'uuid/v4'

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 255,
    },
    text: {
        type: String,
        required: true,
        minlength: 1,
    },
    user: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        minlength: 3
    },
    hidden: {
        type: Boolean,
        default: false,
    },
    tags: [{
        type: String
    }],
    uuid: {
        type: String,
        default: uuid()
    }
}, {
    timestamps: true
})

const Card = mongoose.model('Card', cardSchema)

export default Card
