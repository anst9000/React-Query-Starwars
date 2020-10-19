import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return await res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    fetchPlanets
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data.</div>}
      {status === "success" && (
        <>
          <button
            className="prev-button"
            disabled={page === 1}
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
          >
            Previous page
          </button>
          <span className="page-number">Page {page}</span>
          <button
            className="next-button"
            disabled={!latestData || !latestData.next}
            onClick={() =>
              setPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              )
            }
          >
            Next page
          </button>
          <div>
            {resolvedData.results.map((planet) => {
              return <Planet planet={planet} key={planet.name} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
