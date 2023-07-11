import React from "react";

const FilteringTools = () => {
  return (
    <section className="filtering-tools">
      <div className="search-bar">
        <span className="material-symbols-outlined search-bar__icon">search</span>
        <input className="search-bar__input" placeholder="Search for a Country" type="text" />
      </div>

      <select name="region-dropdown" id="sub-region">
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default FilteringTools;
