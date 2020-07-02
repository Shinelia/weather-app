import React, { Component } from 'react';
import axios from 'axios';
import "./WeatherSystem.css";
import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: "Lens",

     }

    componentDidMount() {
        let city = this.state.city;
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            console.log(res.data.list);
            this.setState({
                periods: res.data.list
            })
        })
    }

    changeCity = (e) =>{
        e.preventDefault();
        let city = this.state.city;
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            this.setState({
                periods: res.data.list,
                city : this.state.city
            })
        })
    }
    
    handleChange = (e) => {
        this.setState({
            city : e.target.value
        })
    }

    render() { 
   
        let periodTemp = this.state.periods.filter(period => period.dt_txt.substr(11) === "12:00:00");
        let periodsList = [this.state.periods[0], ...periodTemp];
        let res =  periodsList.map(period => period != null ? <Period period={period}/> : null );

        return ( 
            <div className="weathers">
                <div className = "choice">
                    <form onSubmit={this.changeCity} >
                        <input type="text" id="city" placeholder="Choose a city" name={this.state.city} onChange={this.handleChange}></input>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <h1>{this.state.city}</h1>
                <div className="resultat">{res}</div>
            </div>
         );
    }
}
 
export default WeatherSystem;