import React from "react";

const GenerateEmployee = ({ selectEmployee }) => {
  return (
    <div className="GenerateEmployee">
      <button onClick={selectEmployee}>Get simpson</button>
    </div>
  );
};

export default GenerateEmployee;
