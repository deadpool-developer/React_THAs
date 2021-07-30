import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateEmailInput, updateUserNameInput,updateUserPasswordInput } from "./redux/userForm/userFromActions";


function Froms() {
    const userName = useSelector((state) => state.username)
    const email = useSelector((state) => state.email)
    const password = useSelector((state) => state.password)
    const dispatch = useDispatch()

    return (
        <div>
            <hr></hr><h2 style ={{fontSize: "x-large",
        fontFamily: "monospace",
        textAlign: "center"}}>Simple Form using React-Redux</h2><hr></hr>
            <form action="">
                <label htmlFor=""><p style={{fontFamily: "serif" }}>UserName : &nbsp;</p></label>
                <input
                style ={{margin: "10px 0",
                    padding: "10px",
                border: "2px solid black",
            borderRadius: "4px"}}
                    type="text"
                    placeholder='UserName'
                    value={userName}
                    onChange={(e) => dispatch(updateUserNameInput(e.target.value))}/><br></br>

                <label htmlFor=""><p style={{fontFamily: "serif"}}>&nbsp;Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></label>
                <input
                 style ={{margin: "10px 0",
                 padding: "10px",
             border: "2px solid black",
         borderRadius: "4px"}}
                    type="email"
                    placeholder='email'
                    value={email}
                    onChange={(e) => dispatch(updateEmailInput(e.target.value))}/><br/>

<label htmlFor=""><p style={{fontFamily: "serif" }}>Password : &nbsp;&nbsp;&nbsp;</p></label>
                <input
                style ={{margin: "10px 0",
                    padding: "10px",
                border: "2px solid black",
            borderRadius: "4px"}}
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => dispatch(updateUserPasswordInput(e.target.value))}/>
            </form>
            <div className="showbox">
                <br/><hr/><h2>Show Data</h2>
                <p>UserName : {userName}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p><hr/>
            </div>
        </div>
    );
}

export default Froms;