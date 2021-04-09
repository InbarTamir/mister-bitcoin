import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines'

export function Chart(props) {
  return (
    <div className="chart">
      <h3> { props.title } </h3>
      <Sparklines
        data={ props.data }
        width={ 300 }
        height={ 50 }
        margin={ 5 }>
        <SparklinesLine style={ { stroke: props.color, fill: "black" } } />
      </Sparklines>
      <p> { props.subtitle } </p>
    </div>
  )
}