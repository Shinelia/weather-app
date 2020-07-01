import "./Period.css";
import React, { Component } from 'react';


class Period extends Component {
    state = {  }
    
    

    render() { 
        let period = this.props.period;
        console.log(period);
        let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;        
        
        return ( 
        <div className="period">
            <span className="period_date">{period.dt_txt}</span>
            <img className="period_image" src={iconURL} alt=""></img>
            <span className="period_temp">{period.main.temp}</span>
            <span className="period_description">{period.weather[0].description}</span>
            
        </div>
        );
    }
}
 
export default Period;