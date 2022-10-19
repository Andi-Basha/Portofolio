import Image from './images/pfp.jpg'

const AboutMe = () => {
  return (
    <div>
      <div className="aboutMe">
        <div className="sectionOne">
            <div className="aboutMe__title"><span className="aquac">01. </span> About Me <div className="hLine"></div><br /><br /></div>
            <div className="contain--text">
                <p className="small--text">Hello! My name is Andi and I enjoy creating things that live on the internet. My interest in web development started back in 2016 when I decided to try editing custom web themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!<br /><br /></p>
        <p className="small--text">Here are a few <span className="aquac">technologies</span> I’ve been working with recently:<br /><br />
            <table>
                <tr>
                    <th>&rsaquo; JavaScript</th>
                    <th>&rsaquo; TypeScript</th>
                </tr>

                <tr>
                    <th>&rsaquo; React</th>
                    <th>&rsaquo; MongoDB</th>
                </tr>

                <tr>
                    <th>&rsaquo; Node.js</th>
                    <th>&rsaquo; Bootstrap</th>
                </tr>
            </table>
        </p>
            </div>
        
    </div>

        <div className="sectionTwo"> 
            <img src={Image}></img>
            <div className="overlay"></div>
        </div>
    </div>
    </div>
  )
}

export default AboutMe
