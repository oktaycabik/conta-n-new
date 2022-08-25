import React from "react";

const FilterInfo = ({ filter, setFilter }) => {
  return (
    <div className="container">
      <div className="row pl-5 pr-5 justify-content-center mt-5 mb-5 pb-5 pt-5">
        <div className="col-lg-3 text-center mt-3 col-12">
          <span
            onClick={() => setFilter(1)}
            className={`${
              filter === 1 ? "filter-active" : ""
            }  filter-text`}
          >
            Beschreibung
          </span>
        </div>
        <div className="col-lg-3 col-12 text-center mt-3">
        <span
          onClick={() => setFilter(2)}
          className={`${filter === 2 ? "filter-active" : ""}  filter-text`}
        >
          Technische Daten
        </span>
        </div>
        <div className="col-lg-3 col-12 text-center mt-3">
        <span
          onClick={() => setFilter(3)}
          className={`${filter === 3 ? "filter-active" : ""}  filter-text`}
        >
          Inneneinrichtung
        </span>
        </div>
      </div>
    </div>
  );
};

export default FilterInfo;
