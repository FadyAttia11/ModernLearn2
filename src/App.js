import React from 'react';
import './App.css'
import Toolbar from './components/Toolbar/Toolbar.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import studyingGirl from './assets/img/studyingGirl.jpg'

class App extends React.Component{
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="container">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <div className="fortxt">
          <center><h1>Join us Now for better<br />and modern way of learning</h1></center>
        </div>
        <button className="button">Get Started</button>
          <div className="mainphoto">
            <img src={studyingGirl} alt="main photo of girl studying" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
