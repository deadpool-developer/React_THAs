import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "adityasaini",
        password: "Aditya@25112001",
        boxes: []
    });

    const [error, setError] = useState(false);

    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}&`;
        form.boxes.map(
            (box, index) => (url += `&boxes[${index}][text]=${box.text}`)
        );
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMeme({ ...meme, url: data.data.url });
                    setError(false);
                } else {
                    setError(true);
                }
            });
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
                        }}
                    />
                ))}
            </div>

            {error && <p className="error-message">Fill the Caption field</p>}
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