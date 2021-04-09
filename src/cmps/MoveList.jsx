import { MovePreview } from './MovePreview'

export function MoveList({moves, title}) {
  return (
    <div>
      <p>{title}:</p>
      {moves && moves.map(move => <MovePreview key={move.at} move={move} />)}
    </div>
  )
}
