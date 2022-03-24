//import logo from './logo.svg';
import './App.css';
import React from 'react';
import{ BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { useParams } from 'react-router';

const Home = (props) => {
  return (
    <h1></h1>
  );
}
const Home2 = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const Num_Word = (props) => {
  const { word } = useParams();
    
  return (
    isNaN(word) ?
    <h1>The word is : { word }!</h1>:
    <h1>The number is : { word }!</h1>
  );
}

const Word_color = (props) => {
  const { word,color1,color2 } = useParams();

  const style = {
    color: color1,
    backgroundColor: color2
}
    
  return (
    <h1 style={style}>The Word is : { word }!</h1>
  );
}
function App() {
  return (
    <BrowserRouter>
    <h1>Routing Practice!</h1>
    <p>
      <Link to="/">Home</Link>
       | 
      <Link to="/Home2">Welcome page</Link>  
      
    </p>

    <Switch>
    <Route exact path="/:word">
        <Num_Word/>
      </Route>
      <Route exact path="/:word/:color1/:color2">
        <Word_color/>
      </Route> 
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home2">
        <Home2 />
      </Route>

    </Switch>
  </BrowserRouter>
    );
}

export default App;
