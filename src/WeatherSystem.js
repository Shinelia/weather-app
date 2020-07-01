import React, { Component } from 'react';
import axios from 'axios';
import "./WeatherSystem.css";
import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: "Lens",
        cityName : ""

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
        this.setState({
            city : this.state.cityName
        })
    }
    
    handleChange = (e) => {
        this.setState({
            cityName : e.target.value
        })
    }

    render() { 
        console.log(this.state.periods);
        // periodsList = [...periodsList,this.state.periods]
        //     .filter(period => period.dt_txt.substr(11) === "12:00:00")
        //     .map(period => {
        //         return <Period period={period} />
        // })

        let periodTemp = this.state.periods.filter(period => period.dt_txt.substr(11) === "12:00:00");
        let periodsList = [this.state.periods[0], ...periodTemp];
        let res =  periodsList.map(period => {
            console.log(period);
            return <Period period={period} />
        })

        return ( 
            <div className="weathers">
                <div className = "choice">
                    <form onSubmit={this.changeCity} >
                        <input type="text" id="city" placeholder="Choose a city" onChange={this.handleChange}></input>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <h1>{this.state.city}</h1>
                {res}
            </div>
         );
    }
}
 
export default WeatherSystem;