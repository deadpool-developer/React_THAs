import { useState, useEffect } from "react";
import "./meme.css";
import Template from "./template";
import Meme from "./meme2";

function MemeGenerator() {
    const [templates , setTemplate] = useState([])
    const [meme , setMeme] = useState(null)
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((data) =>{
            setTemplate(data.data.memes);
          });
            

    }, []);

    return (
        <div>
            <h1 className="meme-head">Meme Generator</h1>
            {meme === null ? (<Template templates ={templates} setMeme = {setMeme}/>) : <Meme meme={meme} setMeme={setMeme}/>}
            

            
        </div>
    )
}

export default MemeGenerator;