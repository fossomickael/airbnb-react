
import './App.css';
import FlatList from './components/flat_list';
import flats from './data/flats.js'
import Map from './components/map'
import React, { Component } from 'react'; 

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      long: 48.884211,
      lat: 2.34689,
    };

    this.updateMap = this.updateMap.bind(this);
  }

  updateMap(lat,long) {
    this.setState({
      lat: lat,
      long: long
    })
  }
  

  render() {
    return (
      <div>
      <div>
      <FlatList flats={this.state.flats} updateMapFunction={this.updateMap} />
      </div>
         
      <div>
        <Map long={this.state.long} lat={this.state.lat} />
      </div>
         
      </div>
      

        );
    }

 
}

export default App;
