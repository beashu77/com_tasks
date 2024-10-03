// import { useState } from "react";
import Home from "./Components/Home";
import Otp from "./Components/Otp";
const App = () => {
  // // const [run,setRun]={}
  // const [run, setRun] = useState(0);
  // const [out, setOut] = useState(0);

  // const handlerun = (currRun) => {
  //   setRun(run + currRun);
  // };

  // const handleOut = () => {
  //   setOut(out+1);
  // };

  // let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div >
      {/* <h2>current Score : {run}-{out}</h2>
      
      {arr.map((elem) => {
        return <button disabled={out===10} onClick={()=>handlerun(elem)}>{elem}</button>;
      })}

      <button disabled={out===10} onClick={()=>handleOut()}>out</button> */}
      {/* <Home/> */}
      <Otp/>
    </div>
  );
};

export default App;
