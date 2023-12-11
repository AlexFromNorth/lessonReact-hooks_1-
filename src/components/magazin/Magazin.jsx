import React, { useState } from "react";

const Magazin = () => {
    const [count, setCount] = useState(0)
  return (
    <div className="magazin">
      <h3>Ball</h3>
      <img src="https://cdn1.ozone.ru/s3/multimedia-g/c600/6352035196.jpg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <p>100$</p>
      <button onClick={()=>{setCount(count + 1)}}>buy</button>
      <p>{count}</p>
    </div>
  );
};

export default Magazin;