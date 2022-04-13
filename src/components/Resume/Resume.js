import "./Resume.css";

function Resume() {
  return (
    <div id="resume" className="section">
      <p className="sectionTitle">RESUME</p>
      <div className="table">
        <hr />
        <p className="subTitle">Education</p>
        <div class="item">
          <p class="time">2021.10 -</p>
          <p>Medieninformatik Online &#40;B.Sc.&#41;, BHT, Berlin, Germany</p>
        </div>
        <div class="item">
          <p class="time">2019.10 - 2021.07</p>
          <p>
            Medieninformatik &#40;B.Sc.&#41;, Teilzeitstudium, BHT, Berlin,
            Germany
          </p>
        </div>
        <div class="item">
          <p class="time">2002.09 - 2006.06</p>
          <p>
            Bachelor of Architecture degree, National Cheng Kung University,
            Tainan, Taiwan
          </p>
        </div>
        <hr />
        <p className="subTitle">Professional practices</p>
        <div class="item">
          <p class="time">2015.05 -</p>
          <p>Klaus Roth Architekten , Berlin, Germany</p>
        </div>
        <hr />
        <p className="subTitle">Skills</p>
        <div className="skills">
          <img src="/images/html.png" alt="HTML" className="skill" />
          <img src="/images/css.png" alt="CSS" className="skill" />
          <img src="/images/js.png" alt="JavaScript" className="skill" />
          <img src="/images/react.png" alt="React" className="skill" />
          <img src="/images/java.png" alt="Java" className="skill" />
          <img src="/images/mySQL.png" alt="MySQL" className="skill" />
          <img src="/images/photoshop.png" alt="Photoshop" className="skill" />
          <img
            src="/images/illustrator.png"
            alt="Illustrator"
            className="skill"
          />
          <img src="/images/inDesign.png" alt="InDesign" className="skill" />
        </div>
      </div>
    </div>
  );
}
export default Resume;
