
import './App.css';
import FlatList from './components/flat_list';
import flats from './data/flats.js'
import React, { Component } from 'react'; 

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
    };
  }
  

  render() {
    return (
      <div>
         <FlatList flats={this.state.flats} />
      </div>

        );
    }

 
}

export default App;
