import React from "react";

const FilteringTools = () => {
  return (
    <section className="filtering-tools">

      <input className="search-bar" type="text" />

      <select name="sub-region" id="sub-region">

        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        
      </select>

    </section>
  );
};

export default FilteringTools;
