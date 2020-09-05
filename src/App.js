import React, { Component } from 'react';
import './App.css';
import { GlobalProvider } from './Context/GlobalState';
import { Navbar, Carousel, Description} from './components/index';
import { fetchData } from './Context/GlobalState';

class App extends Component {

   componentDidMount(){
     const url = 'https://sleepy-everglades-26976.herokuapp.com/api/wednesday'
    fetch(url).then(res=>res.json).then(data=>console.log(data)).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
   }

  render(){
    return (
      <GlobalProvider>
        <div className="App">
          <Navbar />
          <Carousel />
          <Description />
        </div>
      </GlobalProvider>
  
    );
  }
 
}

export default App;
