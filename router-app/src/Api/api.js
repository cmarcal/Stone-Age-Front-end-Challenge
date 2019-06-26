import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios

export const HTTP = axios.create({
  baseURL: process.env.ROOT_API,
  headers: {
  }
})
