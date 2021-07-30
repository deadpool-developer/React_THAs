import React , {useContext} from "react";
import LoginContext from "../Authentic";

function Home(){
    const handleLog = useContext(LoginContext);
    return(
        <>
        <h1 style={{textAlign: 'center'}}>Home</h1>
        <h2 style={{textAlign: 'center'}}>If not logged in Can't access , Profile and DashBoard</h2>
        <button onClick={handleLog.log} style={{textAlign: 'center', marginLeft:"50vw"}} >
        {handleLog.loggedIn ? "Logout" : "Login"}
        </button>
        </>
    );
}

export default Home;