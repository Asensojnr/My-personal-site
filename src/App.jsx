import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div >

        <div className="navbar has-background-black">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img src="https://i.ibb.co/zF80xbv/AS.png" alt="im" />
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="#home">Home</a>
              <a className="navbar-item" href="#skills">Skills</a>
              <a className="navbar-item" href="#title1">Tools</a>
              <a className="navbar-item" href="#project">Project</a>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="https://github.com/Asensojnr" target="_blank" rel="noopener noreferrer" alt="git">
                  <img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" alt="ki" /></a>
              </div>
            </div>
          </div>
        </div>
        <section className="section full-height" data-aos="fade-in" >
          <div className="columns">
            <div className="column">
              <p id="home" className="title padding-y-3 is-size-1">
                Hey there!
                  <br />Welcome to the codeworld!
            </p>
              <p className="subtitle ">
                Hi, i'm Asenso a web and app developer.

            </p>
              <p className="subtitle">Platform</p>
              <img src="" alt="" />
            </div>
            <div className="column padding-y-3">
              <img src="https://i.ibb.co/Jkshvkg/web-2389250-1280.jpg" alt="web" />
            </div>
          </div>
        </section>

        <section className="section full-height" data-aos="fade-in">
          <div className="columns">
            <div className="column padding-y-3  " >
              <p id="skills" className="title">SKILLS</p>
              <p className="subtitle">Web development  &nbsp;App Development &nbsp; Graphics Design&nbsp; </p>
              <p className="subtitle">Music Production  &nbsp;Video Editing &nbsp; Software & Hardware&nbsp; </p>
            </div>
          </div>
        </section>


        <section className="section">
          <div className="columns">
            <div className="column padding-y-3 " data-aos="fade-in">
              <p id="title1" className="title ">TOOLS</p>
              <p className="subtitle">Java script &nbsp;React js &nbsp; HTml </p>
              <p className="subtitle">FL studio &nbsp;PhotoShop &nbsp; Premier pro </p>
              <p className="subtitle">After Effect &nbsp;Blender &nbsp;  </p>
            </div>
            <div className="column">
              <img src="https://i.ibb.co/7XqTQ2M/hgjk.png" alt="g d" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="columns padding-y-3">
            <div className="column">
              <p id="project" className="title">PROJECT</p>
              <div class="tags has-addons">
                <span class="tag">Basic</span>
                <span class="tag is-primary">Form</span>
              </div>
              <div class="tags has-addons">
                <span class="tag">Basic</span>
                <span class="tag is-primary">Calculator</span>
              </div>
              <div class="tags has-addons">
                <span class="tag">Simple</span>
                <span class="tag is-primary">Listing</span>

              </div>
            </div>
          </div>

        </section>


      </div>

    )

  }
}
export default App;








