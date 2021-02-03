import React from 'react';

import './sorting.css';

const Sorting = () => (
  <form className="sorting">
    <input className="visually-hidden" id="cheap" type="radio" name="sort-type" defaultChecked />
    <label htmlFor="cheap">Самый дешевый</label>
    <input className="visually-hidden" id="fast" type="radio" name="sort-type"/>
    <label htmlFor="fast">Самый быстрый</label>
    <input className="visually-hidden" id="optimal" type="radio" name="sort-type"/>
    <label htmlFor="optimal">Оптимальный</label>
  </form>
);

export default Sorting;
