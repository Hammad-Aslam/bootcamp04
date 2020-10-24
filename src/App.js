
import Message from './message.js';
import './App.css';
import { useState } from 'react';

function App(){
  let [isCount, setCount] = useState(1);
  let [isDay, setDay] = useState(true,false);
  return (
    <div className="day">
      <Message counter = {isCount}/>
      <h1> 
        This is bootcamp session {isCount}
      </h1>
      <button onClick={
        ()=> setCount(++isCount)
      }>
        Click!
      </button>
      <h1>
       This line tells us a weekend days {isDay ? 'Saturday': 'Sunday'}
      </h1>
      <button on onClick={
        ()=> setDay(!isDay)
      }>
        Day
      </button>
    </div>
    
  )
};
export default App;