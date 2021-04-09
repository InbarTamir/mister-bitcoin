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
  let marketPrice = storageService.load('market_price')
  if (!marketPrice) {
    const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    storageService.store('market_price', res.data)
    marketPrice = res.data
  }
  return Promise.resolve(marketPrice)
}

async function getConfirmedTransactions() {
  let transaction = storageService.load('confirmed_transactions')
  if (!transaction) {
    const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
    storageService.store('confirmed_transactions', res.data)
    transaction = res.data
  }
  return Promise.resolve(transaction)
}
// const res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')

async function getTradeVolume() {
  // return Promise.resolve(storageService.load('trade_volume'))
}