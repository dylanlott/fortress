import Card from './models'
import { ServerError } from 'express-server-error'

export const index = {
  async get (req, res) {
    try {
      let cards = await Card.find({ user: req.user.email }).exec()
      if (!cards) throw new ServerError(`No cards exist for user ${req.user.email} yet`, { status: 404 })
      res.json(cards)
    } catch (error) {
      console.error('#### ERROR: ', error)
      res.handleServerError(error)
    }
  },

  async getOne (req, res) {
    console.log(`req.user: ${req.user}`)
    try {
      let card = await Card.findOne({ _id: req.params.id })
      if (!card) throw new ServerError('Card does not exist', { status: 404 })
      return res.json(card)
    } catch (error) {
      res.handleServerError(error)
    }
  },

  async create (req, res) {
    console.log('creating card for ', req.user)
    try {
      let _card = req.body
      console.log('req body', req.body)
      _card.user = req.user.email
      const card = new Card(_card)
      console.log('### CARD ###', card)
      const saved = await card.save()
      res.json(saved)
    } catch (error) {
      console.error('ERROR creating card: ', error)
      console.error('ERROR creating card: ', error.message)
      res.handleServerError(error)
    }
  },

  async update (req, res) {
    try {
      let card = await Card.findByIdAndUpdate(req.params.id, req.body)
      return res.json(card)
    } catch (error) {
      res.handleServerError(error)
    }
  },

  async delete (req, res) {
    try {
      let deleted = await Card.findByIdAndRemove(req.params.id)
      res.json(deleted)
    } catch (error) {
      res.handleServerError(error)
    }
  }
}
