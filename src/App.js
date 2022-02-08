import './App.css';
import Layout from './layouts/index';
import Login from './pages/Login';
import Dashboard from './pages/Home/components/Dashboard';
import Mrf from './pages/Home/components/Mrf';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = false;
  return (
   <>
    {user ? (
      <Layout> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path='mrf' element={<Mrf/>}/>
    </Routes>
  </BrowserRouter>,
  </Layout> 
    ) : (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      </Routes>
  </BrowserRouter>
    )}
   
   </>
  );
}

export default App;
