import React, { memo } from "react";
const Button = ({ handleClick, children }) => {
  console.log(`${children} click`);
  return <button onClick={handleClick}>{children}</button>;
};
export default memo(Button);
