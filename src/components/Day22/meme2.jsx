import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "adityasaini",
        password: "Aditya@25112001",
        boxes: []
    });

    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map(
            (box, index) => (url += `&boxes[${index}][text]=${box.text}`)
        );
        fetch(url)
        .then((res) => res.json())
        .then((data) => setMeme({...meme, url: data.data.url}));
    };

    return (
        <div className="meme-show">
            <img src={meme.url} alt=" Meme" />
            <div>
                {[...Array(meme.box_count)].map((_, index) => (
                    <input
                        key={index}
                        style={{
                            padding: "20px",
                            textAlign: "center",
                            margin: "10px",
                            border: "1px solid black"
                        }}
                        type="text" 
                        placeholder={`Meme Caption ${index + 1}`}
                        onClick={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[index] = { text: e.target.value };
                            setForm({ ...form, boxes: newBoxes });
                        }} />
                ))}
            </div>
            <div>
                <button className="btn" onClick={generateMeme}>Generate Meme</button>
                <button className="btn" onClick={() => {
                    setMeme(null);
                }}>Choose Template</button>
            </div>
        </div>
    )
}

export default Meme;