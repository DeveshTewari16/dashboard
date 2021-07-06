
import Sidebar from './Component/Sidebar/Sidebar';
import Topbar from './Component/Topbar/Topbar';
import Home from './Pages/Home/Home.jsx'
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 
function App() {
  return (
    <Router>
    <div className="App" >
      <Topbar/>
      <div className="mainContainer">
        <div className="sidebarContainer">
        <Sidebar/>
        </div>
      <div className="othermainContainer">
      <Home/>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;