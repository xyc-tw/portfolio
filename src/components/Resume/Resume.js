import "./Resume.css";
import html from "./logos/html.png";
import css from "./logos/css.png";
import js from "./logos/js.png";
import react from "./logos/react.png";
import java from "./logos/java.png";
import mySQL from "./logos/mySQL.png";
import php from "./logos/php.png";
import laravel from "./logos/laravel.png";
import ps from "./logos/photoshop.png";
import illu from "./logos/illustrator.png";
import inDesign from "./logos/inDesign.png";

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
          <p>Bachelor of Architecture degree, NCKU, Tainan, Taiwan</p>
        </div>
        <hr />
        <p className="subTitle">Professional practices</p>
        <div class="item">
          <p class="time">2015.05 - 2022.06</p>
          <p>Klaus Roth Architekten , Berlin, Germany</p>
        </div>
        <div class="item">
          <p class="time">2012.12 - 2014.02</p>
          <p>Cellulose Design Company, ChongQing, China</p>
        </div>
        <div class="item">
          <p class="time">2011.06 - 2012.09</p>
          <p>JCW Architects, Taichung, Taiwan</p>
        </div>
        <div class="item">
          <p class="time">2006.09 - 2008.10</p>
          <p>J.C.Yang Architect & Associates, Taipei, Taiwan</p>
        </div>
        <hr />
        <p className="subTitle">Skills</p>
        <div className="skills">
          <img src={html} alt="HTML" className="skill" />
          <img src={css} alt="CSS" className="skill" />
          <img src={js} alt="JavaScript" className="skill" />
          <img src={react} alt="React" className="skill" />
          <img src={java} alt="Java" className="skill" />
          <img src={mySQL} alt="MySQL" className="skill" />
          <img src={php} alt="PHP" className="skill" />
          <img src={laravel} alt="Laravel" className="skill" />
          <img src={ps} alt="Photoshop" className="skill" />
          <img src={illu} alt="Illustrator" className="skill" />
          <img src={inDesign} alt="InDesign" className="skill" />
        </div>
      </div>
    </div>
  );
}
export default Resume;
