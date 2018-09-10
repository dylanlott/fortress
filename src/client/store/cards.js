import axios from '~/plugins/axios'

export const state = () => {
  return {
    title: '',
    body: '',
    user: '',
    tags: '',
    archived: ''
  }
}

export const mutations = {
  FETCH_CARD_REQUEST (state) {
    console.log('fetching card')
  },

  FETCH_CARD_SUCCESS (state, card) {
    console.log('got card back', card)
  },

  FETCH_CARD_FAILURE (state, error) {
    console.error('Error fetching card: ', error.response.data.error)
  },

  CREATE_CARD_REQUEST (state) {
    console.log('creating card')
  },

  CREATE_CARD_SUCCESS (state, card) {
    console.log('success creating card', card)
  },

  CREATE_CARD_FAILURE (state, error) {
    console.error('Error creating card: ', error.response.data.error)
  },
}

export const actions = {
  async fetchCard ({ state, commit }, id) {
    try {
      let { data } = await axios.get(`/cards/${id}`)
      commit('FETCH_CARD_SUCCESS', data)
    } catch (error) {
      commit('FETCH_CARD_FAILURE', error)
    }
  },

  async create ({ state, commit }, card) {
    console.log('creating card: ', card)
    try {
      let res = await axios.post(`/cards`, card)
      commit('FETCH_CARD_SUCCESS', res)
      commit('notification/SUCCESS', card, { root: true })
    } catch (error) {
      commit('FETCH_CARD_FAILURE', error)
      commit('notification/FAILURE', card, { root: true })
    }
  }
}
