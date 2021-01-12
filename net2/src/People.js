import React from "react";

const People = (props) => {
  const { people } = props;
  return people.map((person) => {
    const { name, age, gender, id } = person;
    return (
      <div className="anton" key={id}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>I'm {gender}</div>
        <div>Welcome, friends!</div>
      </div>
    );
  });
}; 

export default People;
