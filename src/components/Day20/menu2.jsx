import "./day20.css";

const Menu2 = ({title , calories , index, data,setData}) => {
    return (
            <div className="card">
                <h1 className="title">{title}</h1><br/>
                <button className="day20-btn" onClick = {() => {
                    const newData = data.filter((el , i) => i!== index);
                    setData(newData);
                }}>Delete</button>
                <h2 className="calories">Calories contain {calories}</h2>
            </div >
    );
}



export default Menu2;
