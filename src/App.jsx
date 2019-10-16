import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
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
              <a className="navbar-item" href="#title1">Tools</a>
              <a className="navbar-item" href="http://github/asensojr">Project</a>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="https://github.com/Asensojnr" target="_blank" rel="nooperner noreferrer" alt="git">
                  <img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" alt="ki" /></a>
              </div>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="title padding-y-3 is-size-1">
                  Hey there!
                  <br />Welcome to the codeworld!
            </p>
                <p className="subtitle ">
                  Hi, i'm Asenso a web and app developer.
            </p>
              </div>
              <div className="column">
                <img src="https://i.ibb.co/Jkshvkg/web-2389250-1280.jpg" alt="web" />
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <p className="title">SKILLS</p>
                <p className="subtitle">Web development  &nbsp;App Development &nbsp; Graphics Design&nbsp; </p>
                <p className="subtitle">Music Production  &nbsp;Video Editing &nbsp; Software & Hardware&nbsp; </p>
              </div>
            </div>


            <div className="columns">
              <div className="column padding-y-3">
                <p id="title1" className="title ">TOOLS</p>
                <p className="subtitle">Java script &nbsp;React js &nbsp; HTml </p>
                <p className="subtitle">FL studio &nbsp;PhotoShop &nbsp; Premier pro </p>
                <p className="subtitle">After Effect &nbsp;Blender &nbsp;  </p>
              </div>
              <div className="column">
                <img src="https://i.ibb.co/7XqTQ2M/hgjk.png" alt="g d" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )

  }
}
export default App;








