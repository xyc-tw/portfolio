import "./About.css";

function About() {
  return (
    <div id="about" className="section">
      <p className="sectionTitle">ABOUT ME</p>
      <div className="intro">
        <div className="pic">
          <img
            src="/images/portray.jpeg"
            alt="portray"
            width="500"
            height="auto"
          />
        </div>
        <div className="text">
          <p>
            My name is Hsinyu Chen. I used to be an Architect and am now on the
            way to becoming a software developer. I am currently studying
            Medieninformatik in BTH and looking for a job in a related industry
            to reinforce my knowledge. <br />I enjoy different cultures and have
            worked in Taiwan, China, and Germany. In the future, I will continue
            to explore the world and at the same time build my career.
          </p>
          <div className="button">
            <a href="mailto:mars_0608@hotmail.com" target="_blank">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
