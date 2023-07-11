import React from "react";

const FilteringTools = () => {
  return (
    <section className="filtering-tools">

      <input className="search-bar" type="text" />

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
