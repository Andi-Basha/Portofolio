import { useState } from "react";

const Experience = () => {
  //job descriptions to display
  let jobs = {
    NDesign: [
      `Office Administrator - provide secretarial support including creating documents and reports using the Microsoft Office programs available, filing, photocopying, and taking minutes of meetings;`,
      "Graphic Design -	attended the full design program which included branding and identity design, packing design in software Illustrator and Photoshop as well sketching, typeface, composition, and color;",
      "Presentation Skills Training - planning of presentation and preparation, techniques of active engagement of the audience, and dealing with the difficult audience.",
    ],
    CEC: [
      "Intern -	assist in organizational and administrative tasks related to the duties of the RCC in Prishtina and assist in the timely delivery of materials for planned activities in the office;",
      "Database manager - data extraction, transformation, and loading, database backup and recovery.",
      
    ],
    Konrad:[
      'The course provided important information regarding understanding the European Union, its institutions, and its key policy areas. '
    ]
  };

  const [job, setJob] = useState("");

  const handleClick = (e) => {
    if (e.target.innerText === "NightDesign") {
      setJob(
        jobs.NDesign.map((element, index) => <li key={index}>{element}<br /><br /></li>)
      );
    } else if (e.target.innerText === "CEC") {
      setJob(
        jobs.CEC.map((element, index) => <li key={index}>{element}<br /><br /></li>)
      );
    }else if(e.target.innerText ==="Konrad Adenauer\nStiftung"){
      setJob(
        jobs.Konrad.map((element, index) => <li key={index}>{element}<br /><br /></li>)
        );
    }
  };

  return (
    <div>
      <div className="aboutMe">
        <div className="sectionOne">
          <div className="aboutMe__title">
            <span className="aquac">02. </span>{" "}
            <div id="text">My Experience</div> <div className="hLine"></div>
            <br />
            <br />
          </div>

          <div className="workPlace">
            <div className="workTitle">
              <button className="button__work" onClick={(e) => handleClick(e)}>
                NightDesign
              </button>
              <button className="button__work" onClick={(e) => handleClick(e)}>
                CEC
              </button>
              <button className="button__work" onClick={(e) => handleClick(e)}>
              Konrad Adenauer <br/>Stiftung  
              </button>
            </div>
            <div className="workDescription">
              <ul>{job}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
