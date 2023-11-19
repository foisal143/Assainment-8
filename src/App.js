import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Blogcontainer from './components/Blogcontainer/Blogcontainer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Blogcontainer></Blogcontainer>
    </div>
  );
}

export default App;
