import React from "react";
import bigDecimal from "js-big-decimal";

const Planet = ({ planet }) => {
  const populationUnformatted = new bigDecimal(parseInt(planet.population));
  const population = populationUnformatted.getPrettyValue(3, " ");

  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
