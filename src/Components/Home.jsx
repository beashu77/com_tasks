import React, { useState } from "react";
// import style from "./style"

const Home = () => {
  // Create a widget that renders the current time in HH:MM:SS format using a LED-segment digital display. You are free to choose to use 12-hour or a 24-hour display.

  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(59);
  const [sec, setSec] = useState(50);

  // console.log()
  //00 59 50

  setTimeout(() => {
    setSec(sec + 1);
    if (sec === 60) {
      setMin(min + 1);
      setSec(0)
    }
    if (min === 60) {
      setHr(hr + 1);
      setMin(0)
    }
  }, 1000);
  //

  return (
    <div>
      <h2>
        time : {hr} :{min}: {sec}
      </h2>
    </div>
  );
};

export default Home;
