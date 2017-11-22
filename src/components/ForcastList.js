import React from 'react'
import { connect } from 'react-redux'

class ForcastList extends React.Component {
  handleWeather(data) {
    return (
      <tr key={data.city.name}>
        <td>{data.city.name}</td>
      </tr>
    )
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.handleWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({weather}) => {
  return {weather}
}

export default connect(mapStateToProps)(ForcastList)
