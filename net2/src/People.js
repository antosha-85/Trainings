import React from "react";

const People = (props) => {
  const { people, deletePerson } = props;
  return people.map((person) => {
    const { name, age, gender, id } = person;
    return age >= 2 ? (
      <div className="anton" key={id}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>I'm {gender}</div>
        <div>Welcome, friends!</div>
        <button onClick={() => deletePerson(id)}>Delete</button>
      </div>
    ) : null;
  });
};

export default People;
