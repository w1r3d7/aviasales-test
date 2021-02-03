import React from 'react';

import './filter.css';

const Filter = () => (
  <form className="filter">
    <span>Количество пересадок</span>
    <div className="filter__input-wrapper">
      <input className="visually-hidden" id="all" type="checkbox" name="all" defaultChecked />
      <label htmlFor="all">Все</label>
    </div>
    <div className="filter__input-wrapper">
      <input className="visually-hidden" id="without-transfer" type="checkbox" name="without-transfer" />
      <label htmlFor="without-transfer">Без пересадок</label>
    </div>
    <div className="filter__input-wrapper">
      <input className="visually-hidden" id="one-transfer" type="checkbox" name="one-transfer" />
      <label htmlFor="one-transfer">1 пересадка</label>
    </div>
    <div className="filter__input-wrapper">
      <input className="visually-hidden" id="two-transfers" type="checkbox" name="two-transfers" />
      <label htmlFor="two-transfers">Две пересадки</label>
    </div>

  </form>
);

export default Filter;
