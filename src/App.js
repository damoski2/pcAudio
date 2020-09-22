import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from './App.module.css';
import { GlobalProvider } from './Context/GlobalState';
import { Auth_firebase } from './components/index';
import { fetchWednesday, fetchSunday } from './Context/GlobalState';


class App extends Component {


  drawerToggleOpen = () => {
    this.setState((prevState) => {
      return { navdrawerOpen: !prevState.navdrawerOpen }
    })
  }

  drawerToggleClose = () => {
    this.setState({ navdrawerOpen: false })
  }


  state = {
    wednesday_data: {},
    sunday_data: {},
    navdrawerOpen: false,
  }


  async componentDidMount() {
    const fetchedwed = await fetchWednesday();
    this.setState({ wednesday_data: fetchedwed })

    const fetchedsun = await fetchSunday();
    this.setState({ sunday_data: fetchedsun })
  }




  render() {
    const { wednesday_data, sunday_data, navdrawerOpen } = this.state;

    
    return (
      <div className={style.container}>
        <Auth_firebase 
        navdrawerOpen={navdrawerOpen} 
        drawerToggleOpen={this.drawerToggleOpen} 
        drawerToggleClose={this.drawerToggleClose} />
      </div>

    );
  }
}

export default App;
