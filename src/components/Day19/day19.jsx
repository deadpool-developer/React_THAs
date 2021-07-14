import React, { useState } from "react";
import "./day19.css";

function Hooks(props) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    return (
        <div className="hooks">
            <h1>Hooks & events in React</h1>
            <button className="btn1"
                onClick={() => {
                    const newCount = count1 + 1;
                    setCount1(newCount);
                }}> {count1}</button>

            <button
                onClick={() => {
                    const newCount = count2 + 1;
                    setCount2(newCount);
                }}> {count2}</button>

            <button
                onClick={() => {
                    const newCount = count3 + 1;
                    setCount3(newCount);
                }}> {count3}</button>

            <button
                onClick={() => {
                    const newCount = count4 + 1;
                    setCount4(newCount);
                }}> {count4}</button>


        </div>

    )
}

export default Hooks;