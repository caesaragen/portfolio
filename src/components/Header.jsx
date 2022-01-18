import React, {useState, useEffect} from "react";
import "../styles/header.css";
import dev from "../assets/dev.json";
import DevGif from '../assets/devjoe.gif'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Hi, I'm Joel",
  "A Frontend Developer",
  "With a passion",
  "for coding!"
];
const Header = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      4000 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <header className="App-header">
      <div className="header-row">
        <div className="header-left">
          <span className="intro-text"><h1 class="ml11">
  <span class="text-wrapper">
    <span class="line line1">   <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.slow  }
      /></span>
    {/* <span class="letters">Hi, I'm Joel A Frontend Developer</span> */}
  </span>
</h1></span>
        </div>
        <div className="header-right">
          <img src={DevGif} alt="" srcset="" className="header-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
