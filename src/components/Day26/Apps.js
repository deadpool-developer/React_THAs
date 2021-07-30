import './App.css';
import Froms from "./forms";
import { Provider } from 'react-redux'
import store from "./redux/store";

function Apps() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1 style ={{backgroundColor : "black",
            color: "whitesmoke",
            width: "100%" ,
            textAlign: "center",
            border: "5px solid olive"}}>Redux form</h1>
                <Froms/>
            </div>
        </Provider>

    );
}

export default Apps;