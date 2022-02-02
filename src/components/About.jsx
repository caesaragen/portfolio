import "../styles/about.css";
import js from '../assets/javascript_icon.png'
import node from '../assets/node_icon.png'
import laravel from '../assets/laravel_icon.png'
import react from '../assets/react_icon.png'
import css from '../assets/css_icon.png'
import jquery from '../assets/jquery_icon.png'
import html from '../assets/html5_icon.png'

const About = () => {
    return (
       <div className="card shadow-lg">
  <div className="card-body">
    <h5 className="card-title ">About Me</h5>
    <h6 className="card-subtitle mb-2 text-muted text-light">Card subtitle</h6>
    <p className="card-text">I am a frontend developer with a keen eye for building custom components to match designs and client expectations. I work with HTML5/CSS3, Bootstrap, Javascript, React, React Native and JQuery. I am also proficient in consuming REST APIs as well as some background in backend development using Node (MERN) and PHP/Laravel (LAMP)</p>
          <div className="card-footer">
            <img src={js} alt="" srcset="" className="icon-img" />
             <img src={html} alt="" srcset="" className="icon-img" />
            <img src={node} alt="" srcset="" className="icon-img" />
            <img src={laravel} alt="" srcset="" className="icon-img" />
            <img src={react} alt="" srcset="" className="icon-img" />
            <img src={css} alt="" srcset="" className="icon-img" />
            <img src={jquery} alt="" srcset="" className="icon-img" />
          </div> 
          <a href="" className="card-link">LinkedIn</a>
          <a href="#" className="card-link">Github</a>
  </div>
</div>
    )

};

export default About;
