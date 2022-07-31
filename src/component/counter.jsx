import React, { useMemo, useState } from "react";
const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const incrementOne = () => {
    console.log("countOne");

    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    console.log("countTwo");
    setCountTwo(countTwo + 1);
  };
  const IsEven = useMemo(() => {
    let i = 0;
    while (i <= 300000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <>
      <button onClick={incrementOne}>{`counter one :${countOne}`}</button>
      <span>{IsEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>{`counter Two :${countTwo}`}</button>
    </>
  );
};
export default Counter;
