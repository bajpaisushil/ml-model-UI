import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BottomBar from './components/BottomBar';
import Home from './pages/Home';
import TopBar from './components/TopBar';
import UseCases from './pages/UseCases';
import XAI from './pages/XAI';
import API from './pages/API';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='app-leftpart'>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/use-cases' element={<UseCases />} />
        <Route path='/xai' element={<XAI />} />
        <Route path='/api' element={<API />} />
      </Routes>
      <BottomBar />
      </div>
      <div className='app-rightpart'>

      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
