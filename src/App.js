import React, {useReducer} from "react"
import logo from './logo.svg';
import './App.css';

// root
import rootReducer from "./reducers/index"
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes"



function App() {

  // 初期値
  const initialState = {
    reducerMeat: {numOfMeat: 30},
    reducerVegetable: {numOfVegetable: 25}
  }

  // state dispatch
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <div className="App">
      <header className="App-header">

      <button onClick={()=>dispatch({type: SELL_MEAT})}>Sell meat</button>
      現在の数{state.reducerMeat.numOfMeat}
      <br/>
      <button onClick={()=>dispatch({type: SELL_VEGETABLE})}>Sell Vegetable</button>
      現在の数{state.reducerVegetable.numOfVegetable}
      </header>
    </div>
  );
}

export default App;
