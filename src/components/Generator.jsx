import React, { useState } from 'react';
import './Generator.css';

const Generator = ({ insults }) => {
    const [text, setText] = useState(''); 
    const [play, setPlay] = useState(''); 

    const clickHandler = () => {
        let generateInsult = Math.floor(Math.random() * insults.length);
        let insultText = insults[generateInsult].text;
        let insultPlay = insults[generateInsult].play;
        // console.log(insultText, insultPlay);
        setText(insultText);
        setPlay(insultPlay);
    }

    return (
        <div className="insult-generator">
            <h2 className="insult-generator__text">{text}</h2>
            <h3 className="insult-generator__play">{play}</h3>
            <button className="btn" 
            onClick={clickHandler}>click me</button> 
        </div>
    );
}

export default Generator;