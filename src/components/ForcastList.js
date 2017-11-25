import React from 'react'
import { connect } from 'react-redux'

class ForcastList extends React.Component {
  render() {
    if(this.props.weather.main !== undefined) {
      return (
          <div className="temp">
            <div>{this.props.weather.name}</div>
            <div className="number">{((this.props.weather.main.temp * 9/5)-459.67).toFixed(0)}&deg;</div>
          </div>
      )
    }
    return (
      <div className="temp"></div>
    )
  }
}

const mapStateToProps = ({weather}) => {
  console.log(weather.main)
  return {weather}
}

export default connect(mapStateToProps)(ForcastList)
