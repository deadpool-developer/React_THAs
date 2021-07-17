import { useState } from "react";
import React from "react";
import "./day21.css";
import Button from '@material-ui/core/Button';


function AddItemForm({ addItem }) {
    const [title, setTitle] = useState("");
    const [calorie, setCalorie] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addItem({ title, calorie });
        setTitle("");
        setCalorie("");
    };

    return (

        <form onSubmit={handleSubmit} >
            <h1 className="tracker">Calories Tracker</h1>
            <div className="titled">
                <label> Food Item
                </label><br></br>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Item name">
                </input><br></br>
            </div>

            <div className="number">
                <label>
                    Calorie
                </label><br></br>
                <input
                    type="number"
                    name="number"
                    id="number"
                    required
                    value={calorie}
                    onChange={e => setCalorie(e.target.value)}
                    placeholder="Calorie amount">
                </input>
            </div>

            <div>
                <Button
                    style={{
                        marginLeft: "47vw",
                        marginTop: "4vh",
                        cursor : "pointer"
                    }}
                    type="submit" variant="contained" color="primary">
                    Add Item
                </Button>


            </div>


        </form>
    )

}

function RenderItem({ updateItem, removeItem, item, index }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="border">
            <div className="calorie-text">
                {isEditing ? (
                    <input
                        type='text'
                        name='title'
                        id='title'
                        required
                        value={item.title}
                        onChange={e => updateItem(index, { title: e.target.value })}
                    />
                ) : (
                    <h5 >{item.title}</h5>
                )}
                {isEditing ? (
                    <input
                        type='number'
                        name='calorie'
                        id='calorie'
                        className="calorie-text"
                        required
                        value={item.calorie}
                        onChange={e => updateItem(index, { calorie: e.target.value })}
                    />
                ) : (
                    <p className="calorie-text">
                        {' '}
                        You have consumed {item.calorie} calories.
                    </p>
                )}
                <div >
                    <button onClick={() => removeItem(index)} style={{
                        backgroundColor: "red",
                        color: "whitesmoke",
                        fontFamily: "monospace",
                        borderRadius: "5px",
                        width: "4vw",
                        marginTop: "4vh",
                        cursor : "pointer"
                    }}>
                        Delete
                    </button>
                    <button
                        style={{
                            marginLeft: "2vw",
                            backgroundColor: "blue",
                            fontFamily: "monospace",
                            marginBottom: "2vh",
                            color: "whitesmoke",
                            borderRadius: "5px",
                            width: "4vw",
                            marginTop: "4vh",
                            cursor : "pointer"
                        }}
                        onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Done' : 'Edit'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Day21() {
    const [items, setItems] = useState([]);

    const updateItem = (index, newItem) => {
        setItems(
            items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
        );
    };

    const addItem = item => {
        setItems([...items, item]);
    };

    const removeItem = index => {
        setItems(items.filter((item, i) => i !== index));
    };

    return (
        <div >
            <AddItemForm addItem={addItem} />
            {items.length === 0 ? (
                <h2 className="start-add" >Start Adding Items</h2>
            ) : (
                items.map((item, index) => (
                    <RenderItem
                        item={item}
                        key={index}
                        index={index}
                        updateItem={updateItem}
                        removeItem={removeItem}
                    />
                ))
            )}
        </div>
    );

};

