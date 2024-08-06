import './App.css';
import Employee from './components/Employee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login/> */}
        <Register/>
      </header>
    </div> 
  );
}

export default App;
