import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Blogcontainer from './components/Blogcontainer/Blogcontainer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Blogcontainer></Blogcontainer>
      <ToastContainer />
    </div>
  );
}

export default App;
