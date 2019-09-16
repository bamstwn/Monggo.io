/**
 * This file initialize store for anything related to guest
 */

export const types = {
  SET_UID: 'SET_UID',
  SET_QR: 'SET_QR',
  SET_SERVICE: 'SET_SERVICE',
  SET_ORDERS: 'SET_ORDERS',
  SET_RATES: 'SET_RATES'
}

export const state = () => ({
  uid: null, // user id got after scanning the qr code
  qr: null, // object hold the entire information about the qr
  service: null, // object hold the choosen service
  orders: [], // array hold user orders
  rates: [] // array hold current currency rates
})

export const getters = {
  isCheckedIn: state => state.uid !== null
}

export const mutations = {
  [types.SET_UID]: (state, uid) => {
    state.uid = uid
  },
  [types.SET_QR]: (state, qr) => {
    state.qr = qr
  },
  [types.SET_SERVICE]: (state, service) => {
    state.service = service
  },
  [types.SET_ORDERS]: (state, orders) => {
    state.orders = orders
  },
  [types.SET_RATES]: (state, rates) => {
    state.rates = rates
  }
}

export const actions = {}
