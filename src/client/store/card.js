import axios from '~/plugins/axios'

export const state = () => {
  return {
    data: {
      title: '',
      text: '',
      link: '',
      tags: [],
    }
  }
}

export const mutations = {
  CREATE_CARD_SUCCESS (state, card) {
    state.data = card
  },
  SET_DETAIL (state, card) {
    state.data = card
  }
}

export const actions = {
  async create({ commit }, payload) {
    try {
      let { data } = await axios.post('/cards', payload)
      commit('notification/SUCCESS', 'Card created.', { root: true })
      commit('CREATE_CARD_SUCCESS', data)
    } catch (err) {
      console.log('error: ', err)
      commit('notification/FAILURE', err.response.data, { root: true })
    }
  },

  async detail({ commit }, card) {
      commit('SET_DETAIL', card)
  },

  async delete({ commit }, id) {
    try {
      let { data } = await axios.delete(`/cards/${id}`)
      commit('notification/SUCCESS', 'Card deleted.')
    } catch (err) {
      console.log('error: ', err)
      commit('notification/FAILURE', err.response.data, { root: true })
    }
  }
}
