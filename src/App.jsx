import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="navbar has-background-black">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="https://i.ibb.co/zF80xbv/AS.png" alt="im" />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="http://github/asensojr">Home</a>
            <a className="navbar-item" href="http://github/asensojr">Skills</a>
            <a className="navbar-item" href="http://github/asensojr">Tools</a>
            <a className="navbar-item" href="http://github/asensojr">Project</a>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="https://github.com/Asensojnr" alt="git">
                <img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" alt="ki" /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;








