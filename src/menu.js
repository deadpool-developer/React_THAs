import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Card from "./components/Day16/card";
import day17 from "./components/Day17/day17";
import day18 from "./components/Day18/card2";
import day19 from "./components/Day19/day19";
import Day20 from "./components/Day20/day20";
import day21 from "./components/Day21/day21";
import MemeGenerator from "./components/Day22/meme";
import Bootstrap from "./components/Day25/day25";
import Error from "./Error";



 function App(){
     return(
         <Router>
             <Switch>
                 <Route exact path="/day16" component={Card}/>
                 <Route exact path="/day17" component={day17}/>
                 <Route exact path="/day18" component={day18}/>
                 <Route exact path="/day19" component={day19}/>
                 <Route exact path = "/day20" component={Day20}/>
                 <Route exact path="/day21" component={day21}/>
                 <Route exact path= "/day22" component = {MemeGenerator}/>
                 <Route exact path = "/day25" component = {Bootstrap}/>
                 <Route component={Error}/>
             </Switch>
         </Router>
     )
 }

 export default App;