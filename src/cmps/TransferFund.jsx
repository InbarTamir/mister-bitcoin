import { Component } from 'react'

export function TransferFund(props) {
    const { contact, onTransfer, maxCoins } = props
    let amount = 0
    return (
      <div className="transfer-fund">
        <p>Transfer coins to { contact.name } ({maxCoins} coins left):</p>
        <form onSubmit={(ev) => {
          ev.preventDefault()
          onTransfer(amount)
          ev.target.reset()
          amount = 0 }}>
          <label htmlFor="amount">Amount: </label>
          <input type="number" min="0" max={maxCoins} id="amount" onChange={({target}) => amount = +target.value} required />
          <button>Transfer</button>
        </form>
      </div>
    )
}
