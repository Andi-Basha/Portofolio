import './App.css';


function Header() {


    // const nav = document.querySelector(".nav");
    // let lastScrollY = window.scrollY;
    
    // window.addEventListener("scroll", () =>{
    //     if(lastScrollY < 10){
    //         nav.classList.add("box--shadow");
    //     }
    //     else if (lastScrollY < window.scrollY) {
    //         nav.classList.remove("box--shadow");
    //         nav.classList.add("nav--hidden");
    //     }else{
    //         nav.classList.remove("nav--hidden");
    //     }
        
    //     lastScrollY = window.scrollY;
    // });

  return (
    <>
    <nav className="nav">
        <a href="#" className="nav__link"><div className="aquac">01.</div> About</a>
        <a href="#" className="nav__link"><div className="aquac">02.</div> Experience</a>
        <a href="#" className="nav__link"><div className="aquac">03.</div> Work</a>
        <a href="#" className="nav__link"><div className="aquac">04.</div> Contact</a>
        <a href="#"><button className="buttonOne">Resume</button></a>
    </nav>

    <div className="universe">
        <div className="container">
            <p className="small--text aquac">&nbsp;Hi, my name is</p>
            <div id="title">Andi Basha.</div>
            <p className="large--text gray">I build things for the web.</p>
            <p className="small--text fixed--width">I am a web developer specializing in building (and occasionally<br />designing) exceptional digital experiences. Currently, focused on <br />building accessible, human-centered products in <span className="aquac">Kosovo</span>.</p>
            <button className="buttonOne">Check out my work!</button>
        </div>
    </div>
    </>
  );
}

export default Header;
