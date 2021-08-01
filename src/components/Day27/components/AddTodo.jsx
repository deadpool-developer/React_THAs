import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem , loadTodo} from "../Actions";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from '@material-ui/core/Button';

const AddTodo = () => {
  const [Item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        style={{
          border: "3px solid black",
          borderRadius: "4px",
          width: "20vw",
          height: "7vh",
          fontSize: "large",
        }}
        value={Item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        className="input_todo"
        type="text"
        placeholder="Add a ToDo..."
      />
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        title="Add"
        style={{ marginLeft: "10px", marginTop: "-10px" }}
        onClick={() => {
          dispatch(
            addItem({
              title: Item,
              checked: false,
            })
          );
          setItem("");
        }}
      >
        <AddIcon />
      </Fab>
      <div>
        <Button size= "small" title= "Click " style={{marginRight:"3vw"}} variant="contained" onClick = {() =>{dispatch(loadTodo())} }>Load TODOs</Button>
      </div>
    </div>
  );
};

export default AddTodo;
