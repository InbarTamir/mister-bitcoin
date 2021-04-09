
export function MovePreview({ move }) {
  return (
    <div className="move-preview">
      { move.toId && <p>To: {move.to}</p> }
      <p>At: {new Date(move.at).toLocaleString('en')}</p>
      <p>Amount: {move.amount} coins</p>
    </div>
  )
}
