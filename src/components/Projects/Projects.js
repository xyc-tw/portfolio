import Tilt from "react-tilt";
import "./Projects.css";

import taiwanguide from "./images/taiwanguide.jpeg";
import gtd from "./images/gtd.png";
import smartbrain from "./images/smart-brain.jpeg";
import robofriends from "./images/robofriends.jpeg";

function Projects() {
  return (
    <div id="projects" className="section">
      <p className="sectionTitle">PROJECTS</p>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Taiwan Guide</p>
          <p>
            This is the final project from my web developing course in BTH. The
            website is assumed to represent the traveling agency that promotes
            the culture of Taiwan.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="https://xyc-tw.github.io/taiwanguide/" target="_blank">
                <span>Live</span>
              </a>
            </div>
            <div className="button">
              <a href="https://github.com/xyc-tw/taiwanguide" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <Tilt className="pic Tilt" options={{ max: 25 }}>
          <img
            src={taiwanguide}
            alt="Taiwan Guide"
            className="projectPic Tilt-inner"
          />
        </Tilt>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Getting Things Done</p>
          <p>
            A self-management App based on the book by by David Allen, using
            Laravel Framwork and is deployed with Heroku.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="http://gtd-2022.herokuapp.com" target="_blank">
                <span>Live</span>
              </a>
            </div>
            <div className="button">
              <a
                href="https://github.com/xyc-tw/Getting-Things-Done"
                target="_blank"
              >
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <Tilt className="pic Tilt" options={{ max: 25 }}>
          <img
            src={gtd}
            alt="Getting Things Done"
            className="projectPic Tilt-inner"
          />
        </Tilt>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Smart Brain</p>
          <p>
            The project is based on the course from Udemy. It was built in
            React, and uses the RESTful API - Clarifai to perform face
            recognition.
          </p>
          <div className="buttons">
            <div className="button">
              <a href="https://xyc-tw.github.io/smart-brain/" target="_blank">
                <span>Live</span>
              </a>
            </div>
            <div className="button">
              <a href="https://github.com/xyc-tw/smart-brain" target="_blank">
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <Tilt className="pic Tilt" options={{ max: 25 }}>
          <img
            src={smartbrain}
            alt="Smart Brain"
            className="projectPic Tilt-inner"
          />
        </Tilt>
      </div>
      <div className="project">
        <div className="text">
          <p className="projectTitle">Robofriends</p>
          <p>
            This is my first React Website based on the Udemy course, loading
            JSON files as data resources.
          </p>
          <div className="buttons">
            <div className="button">
              <a
                href="https://xyc-tw.github.io/React-practice-Robofriends/"
                target="_blank"
              >
                <span>Live</span>
              </a>
            </div>
            <div className="button">
              <a
                href="https://github.com/xyc-tw/React-practice-Robofriends"
                target="_blank"
              >
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
        <Tilt className="pic Tilt" options={{ max: 25 }}>
          <img
            src={robofriends}
            alt="Robofriends"
            className="projectPic Tilt-inner"
          />
        </Tilt>
      </div>
    </div>
  );
}
export default Projects;
