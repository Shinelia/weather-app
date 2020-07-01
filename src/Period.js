import "./Period.css";
import React, { Component } from 'react';


class Period extends Component {
    state = {  }
    
    

    render() { 
        console.log(this.props.period);
        let period = this.props.period;
        console.log(period);
        // let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;        
        // let url = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        return ( 
        <div className="period">
            {/* <span className="period_date">{period.dt_txt}</span>
            <img className="period_image" src={iconURL} alt=""></img>
            <span className="period_temp">{period.main.temp}</span>
            <span className="period_description">{period.weather[0].description}</span>
             */}
        </div>
        );
    }
    // render() { 
    //     let period = this.props.period;
    //     let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;

    //     return ( 
    //     <div className="period tile">
    //         <span className="period__date">{period.dt_txt}</span>
    //         <span className="period__description">{period.weather[0].description}</span>
    //         <div>
    //             <img src={iconURL} className="period__img is-centered" alt=""/>
    //         </div>
    //         <span className="period__temp">{Math.round(period.main.temp)}°C</span>
    //     </div>
    //     );
    // }
}
 
export default Period;