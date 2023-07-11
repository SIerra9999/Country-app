import React from "react";
import { useTheme } from "../ThemeContext";
const FilteringTools = () => {

  const currentTheme = useTheme().theme
  return (
    <section className="filtering-tools">
      <div className={`search-bar search-bar--${currentTheme}`}>
        <span className="material-symbols-outlined search-bar__icon">search</span>
        <input className="search-bar__input" placeholder="Search for a country ..." type="text" />
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
