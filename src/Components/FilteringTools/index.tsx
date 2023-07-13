import React from "react";
import { useTheme } from "../ThemeContext";
import {useCountryContext} from "../CountriesContext"
import {filterByRegion} from "../../Utils/SortingFunctions"
import { Regions } from "../../types/UI";
import { fetchAllCountries } from "../../Utils/Requests";


const FilteringTools = () => {
  const currentTheme = useTheme().theme;
  const {countries,setCountries} = useCountryContext()

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
          placeholder="Select A Region"
          className="region__dropdown"
          name="region-dropdown"
          id="region-dropdown"
          onChange={(event) => {
            if (event.target.value === "All") {
              fetchAllCountries().then(result => {setCountries(result)})
            }
            
            fetchAllCountries().then(result => {setCountries(filterByRegion(result,event.target.value as Regions))})
          }}
        >
          <option value="All">All Regions</option>
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
