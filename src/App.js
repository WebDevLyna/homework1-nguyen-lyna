import React, { Component } from 'react';
import logo from './images/airbnb-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">airbnbae</h1>
          <hr />

          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
          <%= link_to image_tag("logo4.png"), root_path, class:"navbar-brand", style:"padding:6px;" %>
          </div>

        </header>

        <main>

        </main>
      </div>
    );
  }
}

export default App;
