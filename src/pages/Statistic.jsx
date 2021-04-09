import { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoin.service'

export class Statistic extends Component {
  state = {
    transaction: null,
    marketPrice: null,
  }

  async componentDidMount() {
    let transaction = await bitcoinService.getConfirmedTransactions() || {}
    transaction = {name: transaction.name, desc: transaction.description, values: transaction.values?.map(value => value.y)}

    let marketPrice = await bitcoinService.getMarketPrice() || {}
    marketPrice = {name: marketPrice.name, desc: marketPrice.description, values: marketPrice.values?.map(value => value.y)}
    
    // let tradeVolume = await bitcoinService.getTradeVolume()
    // tradeVolume = {name: tradeVolume.name, values: tradeVolume.data.values.map(value => value.y)}

    this.setState({ transaction, marketPrice })
  }

  render() {
    const {transaction, marketPrice } = this.state
    return (
      <div>
        { transaction && <Chart data={transaction.values} title={transaction.name} subtitle={transaction.desc} color="green" />}
        { marketPrice && <Chart data={marketPrice.values} title={marketPrice.name} subtitle={marketPrice.desc} color="blue" />}
        {/* <Chart data={tradeVolume.values} title={tradeVolume.name} /> */}
      </div>
    )
  }
}
