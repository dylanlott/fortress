import { ServerError } from 'express-server-error'
import Card from './models'

export const index = {
    async get (req, res) {
        try {
            let cards = await Card.find({
                user: req.user.email
            })
            .sort('createdAt')
            .skip(req.params.skip || 0)
            .limit(req.params.limit || 25)
            .exec()

            if (!cards) throw new ServerError('No cards exist for that user', { status: 404 })

            return res.json(cards)
        } catch (err) {
            console.error("error getting cards for user: ", err, req.user.email);
            return res.handleServerError(err)
        }
    },
    async post (req, res) {
        try {
            let card = new Card(req.body)
            console.log('created card: ', card)
            card.save()
            .then((saved) => {
              return res.json(card)
            })
            .catch((err) => res.send(err))
        } catch (err) {
            console.log('#error ', err)
            return res.handleServerError(err)
        }
    }
}

export const detail = {
    async get (req, res) {
        try {
            let card = await Card.findOne({
                _id: req.params.id
            })
            if (!card) throw new ServerError('No card exists with that id', { status: 404 })

            return res.json(card)
        } catch (err) {
            return res.handleServerError(err)
        }
    }
}
