
import Sidebar from './Component/Sidebar/Sidebar';
import Topbar from './Component/Topbar/Topbar';
import Home from './Pages/Home/Home.jsx'
import "./App.css";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { userData } from './userdata';
import User from './Pages/Users/User.jsx';
import UserPageDetails from './Pages/UserPageDetails/UserPageDetails';
import NewUser from './Pages/NewUser/NewUser.jsx'; 

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
      <Switch>
        <Route exact path='/Home'>
      <Home/>
      </Route>
      <Route exact path='/users'>
      <User/>
      </Route>
      <Route exact path='/newuser'>
      <NewUser/>
        </Route>      
      <Route exact path='/UserPageDetails/:userId'>
      <UserPageDetails/>
      </Route>
      </Switch>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default App;