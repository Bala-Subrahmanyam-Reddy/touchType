import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SourceProvider } from './context/sourceContext';

function App() {
  return (
    <div className='app-screen'>
      <SourceProvider>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </SourceProvider>
    </div>
  );
}

export default App;
