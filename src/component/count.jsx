import React, { memo } from "react";
const Count = ({ text, Count }) => {
  console.log(`renedring ${text}`);
  return (
    <div>
      {text}-{Count}
    </div>
  );
};

export default memo(Count);
