import React from "react";

const DisplayEmployee = ({ employee }) => {
  return (
    <div className="DisplayEmployee">
      <ul>
        <li>Quote : {employee.quote}</li>
        <li>Character : {employee.character}</li>
        <img src={employee.image} alt="simpsoncharacter" />
        <li>CharacterDirection: {employee.characterdirection}</li>
      </ul>
    </div>
  );
};

export default DisplayEmployee;
