import React from 'react';

const FilterItem = ({ filter, id }) => {
  const { name, value } = filter;

  return (
    <li>
      <input type="radio" name="category" value={ value } id={ id } defaultChecked />
      <label htmlFor="{ id }">{ name }</label>
    </li>
  );
};

export default FilterItem;
