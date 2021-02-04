import React from 'react';

import './sorting.css';
import {SortType} from '../../consts';

const Sorting = ({onSortButtonClick, currentSortType}) => (
  <form className="sorting">
    <input
        className="visually-hidden"
        onClick={({target: {value}}) => onSortButtonClick(value)}
        id={SortType.CHEAP}
        type="radio"
        name="sort-type"
        checked={SortType.CHEAP === currentSortType}
        onChange={({target}) => onSortButtonClick(target.id)}
    />
    <label htmlFor={SortType.CHEAP}>Самый дешевый</label>
    <input
        className="visually-hidden"
        id={SortType.FAST}
        type="radio"
        name="sort-type"
        checked={SortType.FAST === currentSortType}
        onChange={({target}) => onSortButtonClick(target.id)}
    />
    <label htmlFor={SortType.FAST}>Самый быстрый</label>
    <input
        className="visually-hidden"
        id={SortType.OPTIMAL}
        type="radio"
        name="sort-type"
        checked={SortType.OPTIMAL === currentSortType}
        onChange={({target}) => onSortButtonClick(target.id)}
    />
    <label htmlFor={SortType.OPTIMAL}>Оптимальный</label>
  </form>
);

export default Sorting;
