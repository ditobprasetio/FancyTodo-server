const axios = require('axios')

class ApiController {
  static display(req, res, next) {
    let weatherIcon = ''
    let weather = ''
    let city = ''
    axios.get('https://www.metaweather.com/api/location/1047378')
      .then(({ data }) => {
        weatherIcon = data.consolidated_weather[0].weather_state_abbr
        weather = data.consolidated_weather[0]
        city = data.title
        return axios.get(`http://metaweather.com/static/img/weather/${weatherIcon}.svg`)
      })
      .then(({ data }) => {
        res.status(200).json({
          data,
          weather, 
          city
        })
      })
      .catch(next)
  }
}

module.exports = ApiController