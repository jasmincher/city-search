import React from 'react';
import './App.css';
import axios from 'axios';
import CitySearch from './CitySearch';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcodes: [],
      found: false
    }
  }


  searchCity = (e) => {
    let userInput = e.target.value;
    userInput = userInput.toUpperCase();
    console.log(userInput);

    axios.get('https://ctp-zip-api.herokuapp.com/city/' + userInput)
      .then((resolve) => {
        this.setState({ zipcodes: resolve.data, found: true });
        // console.log(JSON.stringify(resolve.data));
      })
      .catch((err) => {
        this.setState({ found: false });

      });

  }



  render() {
    let elements;

    if (this.state.found)
      elements = <CitySearch key='i' zips={(this.state.zipcodes)} />;
    else

      elements = <h2 className="search">No results</h2>


    return (



      <div>

        <h1 className="title">Search Zip Codes By City Name</h1>

        <div className="search">

          <input type="text" placeholder="Enter City Name" onChange={this.searchCity} />

          {elements}
        </div>
      </div>

    );

  }


}


export default App;

