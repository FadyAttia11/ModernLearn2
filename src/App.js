import React from 'react';
import './App.css'
import Toolbar from './components/Toolbar/Toolbar.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import MainScreenInfo from './components/MainScreenInfo/MainScreenInfo.js';
import Footer from './components/Footer/Footer.js';
import studyingGirl from './assets/img/studyingGirl2.jpg'

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
          <div className="flex-container">
            <div className="text-container">
              <center><h1>انضم الينا الان<br />لتجربة طريقة افضل للتعلم</h1></center>
              <button className="button">ابدأ الأن</button>
            </div>

            <div className="photo-container">
              <img src={studyingGirl} alt="main photo of girl studying" />
            </div>
          </div>

          <MainScreenInfo />
        </main>

        <Footer />

      </div>
      
    );
  }
}

export default App;
