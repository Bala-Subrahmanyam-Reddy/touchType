import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <div className='app-screen'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
