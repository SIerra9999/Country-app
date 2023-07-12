import React from "react";
import { useTheme } from "../ThemeContext";
const FilteringTools = () => {
  const currentTheme = useTheme().theme;
  return (
    <section className="filtering-tools">
      <div className={`search-bar search-bar--${currentTheme}`}>
        <span className="material-symbols-outlined search-bar__icon">
          search
        </span>
        <input
          className="search-bar__input"
          placeholder="Search for a country ..."
          type="text"
        />
      </div>

      <div className={`region region--${currentTheme}`}>
        <select
          className="region__dropdown"
          name="region-dropdown"
          id="region-dropdown"
          defaultValue={""}
        >
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <span className="material-symbols-outlined dropdown-icon">
          expand_more
        </span>
      </div>
    </section>
  );
};

export default FilteringTools;
