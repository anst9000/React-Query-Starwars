import React from "react";
import bigDecimal from "js-big-decimal";

const Person = ({ person }) => {
  // const height = new bigDecimal(parseInt(person.population));
  // const population = populationUnformatted.getPrettyValue(3, " ");

  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Height - {person.height} cm</p>
    </div>
  );
};

export default Person;
