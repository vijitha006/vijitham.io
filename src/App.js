import { useState } from 'react';
import './App.css';
const Skill=()=>
{
return(
  <>
   <p>HTML</p>
      <div className="container">
        <div className="skills html">70%</div> 
      </div>

      <p>CSS</p>
      <div className="container">
        <div className="skills css">60%</div>
      </div>

      <p>JavaScript</p>
      <div className="container">
        <div className="skills js">40%</div>
      </div>

      <p>Angular</p>
      <div className="container">
        <div className="skills angular">60%</div>
      </div>
  </>
)
  
 
}
function App() {
const [show, setShow]=useState(false);
const showSkill=()=>{
  setShow(true);
}
  const move=(contact)=>{
    return  window.location.href = '#contact';
  }
  return (
    <div >
        <main>
    <section width="100" className="hero">
      <div>
        <h2>Welcome</h2>
        <h1>I'm <span className="name">Vijitha </span> Santhosh</h1>
        <h2>Web Developer</h2>
        <div className="button_div">
          <button onClick={()=>move('contact')}>Contact Me</button>
        </div>
      </div>
    </section>

    <section className="contact_detail">
      <div className="image1">
        <img className="image" src={require('./assets/images/me.jpeg')} alt="profile"/>
      </div>
      <div className="details">
        <p>Hello, I'm Vijitha and I'm working as a web developer. I believe I am a very ambitious person who loves to
          work on making the website work well. Working on the web is my passion as I love to work on exciting projects.
        </p>
        <p>From : Kerala </p>
        <p>Age : 36 </p>
        <p id="contact">Gender :Female </p>
        <p >Email : vijitha006@gmail.com </p>
      </div>
     
    </section>
    <section >
      <h2 style={{textAlign :'left'}}><button onClick={showSkill}> View My Skills</button></h2>
 {show ? <Skill/> : ''}
    </section>
    <section >
      <h2 style={{textAlign:'left'}}>Education</h2>
      <p style={{paddingLeft:'30px'}}>B.Tech Computer Science</p>
    </section>
    <section >
      <h2 style={{textAlign:'left'}}>Experience</h2>
      <p style={{paddingLeft:'30px'}}>Honeycomb Technology- 2021 to present</p>
    </section>
    <section >
      <h2 style={{textAlign:'left'}}>Projects</h2>
      <ul>
        <li><a href="https://www.honeycombtech.org/">Honeycomb Technology website</a></li>
        <li><a href="https://www.thechesswarriors.com/">The Chesswarriors</a></li>
      </ul>
    </section>
    </main>
    </div>
  );
}

export default App;
