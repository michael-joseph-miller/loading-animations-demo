import {
  Dots,
  MinimalSpinner,
  ProgressBar,
  Spinner,
  TrinitySpinner,
  Waves,
} from '@michael-joseph-miller/loading-animations-react';
import logo128 from '../images/logo128.png';
import React from 'react';
import './App.css';

function App() {
  return (
    <div id='app'>
      <div id='grid'>
        <header id='header'>
          <img
            id='header-img-left'
            className='header-img'
            src={logo128}
            alt=''
          />
          <h2 id='header-title'>loader-animations-react</h2>
          <img
            id='header-img-right'
            className='header-img'
            src={logo128}
            alt=''
          />
        </header>
        <main id='main'>
          <div id='dots-wrapper' className='wrapper'>
            <Dots text='Dots Loader' colors={['red', 'white', 'blue']} />
          </div>
          <div id='progress-bar-wrapper'>
            <ProgressBar
              borderColor='red'
              sliderColor='white'
              sliderBackground='blue'
            />
            <p>Progress Bar</p>
          </div>
          <div id='waves-wrapper'>
            <Waves backgroundColor='navy' waveColor='#f0f8ff' />
            <p>Waves</p>
          </div>
          <div id='spinner-wrapper' className='wrapper'>
            <Spinner color1='blue' color2='white' text='Spinner' />
          </div>
          <div id='minimal-spinner-wrapper' className='wrapper'>
            <MinimalSpinner text='Minimal Spinner' color='blue' />
          </div>
          <div id='trinity-spinner-wrapper' className='wrapper>'>
            <TrinitySpinner color='cyan' text='Trinity Spinner' />
          </div>
        </main>
        <footer id='footer'>
          Icons made by
          <a href='https://www.freepik.com' title='Freepik'>
            Freepik
          </a>{' '}
          from
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
