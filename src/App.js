import React, { Component } from 'react';
import './App.scss';
import Logo from './assets/danlubbers-logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {

  componentDidMount() {
    AOS.init({duration: 3000});
  } 

  render() {

    return (

      <div className="App">
        <img className='logo' src={Logo} alt='dan lubbers logo' />
          <div className='btn-container'>
            <a href='http://www.danlubbersphotographs.com' target='_blank' rel='noopener noreferrer'><button className='photoBtn' data-aos='zoom-in'>Photography / Retouching</button></a>
            <a href='http://webdev.danlubbers.com' target='_blank' rel='noopener noreferrer'><button className='webDevBtn' data-aos='zoom-in'>Web Development</button></a>
          </div>
      </div>
    );
  }
}

export default App;
