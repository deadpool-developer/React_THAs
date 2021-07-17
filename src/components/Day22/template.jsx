import React from "react";

const Templates = ({templates , setMeme}) => {
    return (
        <div className="templates">
            {templates.map((template) => (
                <div key={template.id} className="template" onClick = {() =>{
                setMeme(template);
            }}>
                    <div className="meme-image"
                        style={{ backgroundImage: `url(${template.url})` }}>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Templates;
