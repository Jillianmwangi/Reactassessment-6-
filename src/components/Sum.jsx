import React, { useState } from "react";
import './Sum.css';

function Sum() {
  const [numArr, setNumArr] = useState("");
  const [sum, setSum] = useState("");

  function findSum() {
    if(!numArr){
      alert("Enter integers");
      return;
    }


    let nums = numArr.split(",");
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += Number(nums[i]);
    }
    setSum(total);
  }

return (
    <div className="container">
      <label>Enter integers using commas to seperate them:  
        <input
          type="text"
          value={numArr}
          onChange={(e) => setNumArr(e.target.value)}
        />
      </label>
      <button onClick={findSum} className="sumBtn">Calculate Sum</button>
      <label>
        Sum= 
        <input type="text" value={sum} readOnly />
      </label>
    </div>
  );

};



export default Sum;