import React, { useState } from "react";
import Menu2 from "./menu2";


function Day20() {
    const [data, setData] = useState([
        { title: "Pizza", calories: 450 },
        { title: "Burger", calories: 200 },
        { title: "Ice cream", calories: 650 },
        { title: "Fried Rice", calories: 250 },
        { title: "Fries", calories: 150 },
        { title: "Brownie", calories: 630 },
        { title: "Cold Drink", calories: 120 },
        { title: "Manchurian", calories: 430 }
    ]);

    return (
        <div className="main">
            <h2 className="heading">Calories Read Only</h2><hr></hr>
            {
                data.length !== 0 ?
                    data.map((data1, key) => (
                        <Menu2 Key={key} title={data1.title} calories={data1.calories} index={key} data={data} setData={setData} />
                    )) :
                    <h1 className="empty">No Content</h1>
            }
        </div>
    );
}


export default Day20;