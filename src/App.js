
import Sidebar from './Component/Sidebar/Sidebar';
import Topbar from './Component/Topbar/Topbar';
import Home from './Pages/Home/Home.jsx'
import "./App.css";


function App() {
  return (
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
  );
}

export default App;