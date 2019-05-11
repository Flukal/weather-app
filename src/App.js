import React, { Component } from 'react';
import Form from './components/Form';
import Title from './components/Title';
import Weather from './components/Weather';

const API_KEY = '6e84277ec0dc4270fd29cf64bcae2a55';

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    temperature: undefined,
    humidity: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if( city && country ){
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        error: ""
      })
    }else{
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        temperature: undefined,
        humidity: undefined,
        error: "Please insert city and country"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather 
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
