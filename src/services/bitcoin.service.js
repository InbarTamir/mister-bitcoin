import axios from 'axios'
import { storageService } from './storage.service'

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getTradeVolume,
  getConfirmedTransactions
}

function getRate(coins = 0) {
  return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
}

async function getMarketPrice() {
  // const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
  // storageService.store('market_price', res.data)
  return Promise.resolve(storageService.load('market_price'))
}

async function getConfirmedTransactions() {
  // const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
  // storageService.store('trade_volume', res.data)
  return Promise.resolve(storageService.load('confirmed_transactions'))
}
// const res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
// storageService.store('confirmed_transactions', res.data)

async function getTradeVolume() {
  // return Promise.resolve(storageService.load('trade_volume'))
}