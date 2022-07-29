import './App.css';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCosts/NewCost';
import { useState } from 'react';

const INITIAL_COSTS = [
  {
    id:1,
    date: new Date(2020, 2, 12),
    description: 'MacBook',
    amount: 1250
  },
  {
    id:2,
    date: new Date(2021, 2, 12),
    description: 'New Car',
    amount: 23500
  }, 
  { 
    id:3,
    date: new Date(2019, 6, 25),
    description: 'TV',
    amount: 430
  }
 ]

function App() {
  const[costs, setCosts] = useState(INITIAL_COSTS)
   
  const addCostHandler = (cost) => {
    setCosts(prevCosts=> {
      return [cost, ...prevCosts]
    })
   }
  return (
    <div >
      <NewCost  onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
