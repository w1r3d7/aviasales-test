import React, {useState} from 'react';

import './filter.css';
import {FilterType} from '../../consts';

const Filter = ({onFilterChange}) => {
  const [inputs, setInputs] = useState([FilterType.ALL]);

  const handlerCheckboxChange = ({target}) => {
    let options = [...inputs];
    if (target.checked) {
      if (!options.includes(target.value)) {
        options.push(target.value)
      }
    } else {
      options = options.filter((item) => item !== target.value)
    }

    setInputs(options);

    onFilterChange(options);
  }

  return (
      <form className="filter">
        <span>Количество пересадок</span>
        <div className="filter__input-wrapper">
          <input className="visually-hidden" id={FilterType.ALL} type="checkbox" value={FilterType.ALL} defaultChecked onChange={handlerCheckboxChange} />
          <label htmlFor={FilterType.ALL}>Все</label>
        </div>
        <div className="filter__input-wrapper">
          <input className="visually-hidden" id={FilterType.WITHOUT_TRANSFER} type="checkbox" value={FilterType.WITHOUT_TRANSFER} onChange={handlerCheckboxChange} />
          <label htmlFor={FilterType.WITHOUT_TRANSFER}>Без пересадок</label>
        </div>
        <div className="filter__input-wrapper">
          <input className="visually-hidden" id={FilterType.ONE_TRANSFER} type="checkbox" value={FilterType.ONE_TRANSFER} onChange={handlerCheckboxChange} />
          <label htmlFor={FilterType.ONE_TRANSFER}>1 пересадка</label>
        </div>
        <div className="filter__input-wrapper">
          <input className="visually-hidden" id={FilterType.TWO_TRANSFERS} type="checkbox" value={FilterType.TWO_TRANSFERS} onChange={handlerCheckboxChange} />
          <label htmlFor={FilterType.TWO_TRANSFERS}>2 пересадки</label>
        </div>
        <div className="filter__input-wrapper">
          <input className="visually-hidden" id={FilterType.THREE_TRANSFERS} type="checkbox" value={FilterType.THREE_TRANSFERS} onChange={handlerCheckboxChange} />
          <label htmlFor={FilterType.THREE_TRANSFERS}>3 пересадки</label>
        </div>
      </form>
  )
};

export default Filter;
