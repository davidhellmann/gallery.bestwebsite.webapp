/**
 * Modular Store for ui
 */

export const state = () => ({
  navMainOpen: false,
})

export const mutations = {
  toggleNavMainOpen(state, payload) {
    state.navMainOpen = payload
  },
}

export const actions = {}

export const getters = {
  fullname(state) {
    return state.firstName + '' + state.lastName
  },
}
