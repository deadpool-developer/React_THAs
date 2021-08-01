import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Actions";

const ListToDo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "50vw",
        marginLeft: "34vw",
        marginTop: "5vh",
      }}
    >
      <h2
        style={{
          backgroundColor: "olivedrab",
          color: "whitesmoke",
          width: "15vw",
          textAlign: "center",
          marginLeft: "7vw",
          borderRadius: "10px",
        }}
      >
        MY LIST
      </h2>

      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            title="check"
            style={{
              width: "auto",
              height: "auto",
              float: "left",
              cursor: "pointer",
              boxSizing: "content-box",
              marginLeft: "2vw",
              marginTop: "5vh",
            }}
            onClick={() => {
              todo.checked = true;
            }}
          />

          <h4
            style={{ display: "inline-block", padding: "10px", margin: "10px" ,marginRight:"17vw" }}
          >
            {todo.title}
          </h4>
          <IconButton
            size="medium"
            title = "delete"
            style={{ float: "right", marginTop: "3vh", marginRight: "1vw" }}
            aria-label="delete"
            onClick={() => {
              dispatch(removeItem(index));
            }}
          >
            <DeleteIcon />
          </IconButton>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListToDo;
