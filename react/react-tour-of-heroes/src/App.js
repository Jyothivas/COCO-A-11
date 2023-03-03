import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import { useState } from 'react';
import { HeroDetails } from './components/HeroDetails';

function App(props) {
  const [HeroData,setHeroData]=useState([]);
  const parentAlert=(id,name)=>{
    setHeroData({id,name});
  }
  console.log(HeroData.name);
  return (
    <BrowserRouter>
      <h1 className='m-3'>Tour Of Heroes</h1>
      <Routes>
        <Route path='/' element={<Dashboard hero={HeroData} />} />
        <Route path='/hero' element={<Hero alert={parentAlert}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
