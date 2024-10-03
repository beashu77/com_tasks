import React, { useRef, useState ,useEffect} from "react";

const Otp = () => {
  let [inputValue, setInputValue] = useState("");
  let arr = [1, 2, 3, 4, 5, 6];
  const currOtp = (Math.random() * (999999 - 100000) + 100000).toFixed(0); 
  const [otp,setOtp] = useState()
  const handleClick = () => {
    alert(`Otp is ${currOtp}`);
    setOtp(currOtp)
  };

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const handleChange = (e) => {
    setInputValue(e.target.value);
    let curr = otp.split("")[count]
    if (e.target.value != curr) {
        // console.log(typeof(inputValue),inputValue ,typeof(curr),curr)
      console.log("Error : please try correct otp");
      setFlag(false);
    }
    setCount(count+1)
    console.log(count)
    if (count === 5 && flag === true) {
        alert("Correct otp");
      }
  };



  

  return (
    <div>
      {/* <button onClick={() => handleClick()}>Get Otp</button> */}
      <h2>{otp}</h2>
      {arr.map((elem) => {
        return (
          <input key={elem} onChange={(e) => handleChange(e)} type="number" />
        );
      })}
    </div>
  );
};

export default Otp;
