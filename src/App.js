import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Nchrys/Home';
import Signup from './Components/Nchrys/Signup';







function App() {
  const addForm = (task) => {
    console.log (task) 
}


function App() {
const addForm = (task) => {
  console.log (task) 
}
}



  return (

<BrowserRouter>
  
    <div className="App">
<switch>
    <Route path = '/' component={() => < Login onAdd ={addForm} />}  exact/>
    <Route path = '/Signup'  component={() => < Signup onAdd ={addForm} />}  exact/>
    <Route path = '/Login'  component={Login}  exact/>
    <Route path = '/Home'  component={Home}  exact/>
      
      </switch>
      
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;

