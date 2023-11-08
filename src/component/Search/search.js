import React, { useState } from 'react'
import { GEO_API_URL,geoApiOptions } from '../api'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = (onSearchChange) => {
  const [search, setSearch] = useState('null')


  const handleChange = (searchData) => {
    setSearch(searchData )
    onSearchChange(searchData)
  }

  const loadoptions = (inputValue) =>{
    return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }
  return (
    <AsyncPaginate
    placeholder="Search for city"
    debounceTimeout={600}
    value= {search}
    onchange={handleChange}
    loadOptions={loadoptions}/>
    
  )
}

export default Search