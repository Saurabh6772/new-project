import { useState } from 'react'


function useLogic() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  const [state3, setState3] = useState(0)
  const [turn, setTurn] = useState(0)
  const [message, setMessage] = useState("A's turn")
  function clickHandler() {
    if (state1 == 10 || state2 == 10) {
      return;
    }
    var ran = Math.floor((Math.random() * 6) + 1);
    setState3(ran)
    if (turn % 2 == 0) {
      var newState = state1 + ran
      if (newState <= 10) {
        setState1(newState)
      }
      if (newState == 10) {
        setMessage("A Won")
      }
      else {
        setMessage("B's turn")
      }
    }
    else {
      var newState = state2 + ran
      if (newState <= 10) {
        setState2(newState)
      }
      if (newState == 10) {
        setMessage("B Won")
      }
      else {
        setMessage("A's turn")
      }
    }
    setTurn(turn + 1)
  }

  function clickHandler2() {

  }
  return { state1: state1, state2: state2, state3: state3, clickHandler: clickHandler, clickHandler2: clickHandler2, message: message }
}

function App() {
  var res = useLogic()

  return (
    <div>
      <p style={{ display: "inline" }}>A: </p>
      <Square value={res.state1} onClick={res.clickHandler2} />
      <br />
      <p style={{ display: "inline" }}>B: </p>
      <Square value={res.state2} onClick={res.clickHandler2} />
      <br />
      <p style={{ display: "inline" }}>Dice: </p>
      <Square value={res.state3} onClick={res.clickHandler} />
      <br />
      <p>{res.message}</p>
    </div>
  )
}

function Square({ value, onClick }) {
  return (
    <input onClick={onClick} value={value} type="number" style={{ width: "40px", height: "30px", margin: "5px" }}></input>
  )
}

export default App;
