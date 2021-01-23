import './App.css';
import { useState, useEffect } from "react"
import Background from './component/ReactBackground';

function App() {
  return (
    <div className="App">
      <Background></Background>
      <Timer></Timer>
    </div>
  );
}
const Timer = () => {
  const [min, setMin] = useState(0);
  const [txt, setTxt] = useState("Minutes")
  const plus = (e)=>{
    let newMin = min
    let newTxt = txt
    newMin += 1
    if(newMin === 1){
      newTxt = "Minute"
    }else{
      newTxt = "Minutes"
    }
    setMin(newMin)
    setTxt(newTxt)
  }
  const minus = (e) => {
    let newMin = min
    let newTxt = txt
    newMin -= 1
    if(newMin == 1){
      newTxt = "Minute"
    }else{
      newTxt = "Minute"
    }
    if(newMin < 0){

      return alert('時間不可小於 0')
    }
    setMin(newMin)
    setTxt(newTxt)
  }
  const reset = (e) => {
    let newMin = min
    let newTxt = txt
    newMin = 0
    newTxt = "Minute"
    setMin(newMin)
    setTxt(newTxt)
  }
  return (
    <div>
      <button onClick={plus}>+</button>
      <h1>{min} {txt}</h1>
      <button onClick={minus}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
export default App;
