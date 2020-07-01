import React, { Component } from 'react';

class CityChoice extends Component {
    state = { 
        cityName: ""
     }

    ChangeCity = (e) =>{
        e.preventDefault();
        let city = this.props.city;
        console.log(city); //retourne Lens car ville par défaut envoyée depuis le parent
        console.log(e.target.childNodes[0].value); // me retourne bien la ville tapée
        this.setState({
            city : this.state.cityName
        })
        console.log(this.props.cityName);
    }
    
    handleChange = (e) => {
        this.setState({
            cityName : e.target.value
        })
    }


    render() { 

        return ( 

            <div className = "choice">
                <form onSubmit={this.ChangeCity} >
                    <input type="text" id="city" placeholder="Choose a city" value={this.state.cityName} onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
         );
    }
}
 
export default CityChoice;