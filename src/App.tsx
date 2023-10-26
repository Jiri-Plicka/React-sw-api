import React from 'react';
import './App.css';
import { SWList } from './components/sw-list/SWList';
import { SWCard } from './components/sw-card/SWCard';
import { SWPlanets } from './components/sw-planets/SWPlanets';

function App() {
  return (
    <div className="App">
      <SWList />
      <SWPlanets />
    </div>
  );
}

export default App;
