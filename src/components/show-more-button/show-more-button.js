import React from 'react';

import {ITEMS_SHOW} from '../../consts';

import './show-more-button.css';

const ShowMoreButton = ({onButtonClick, ticketsCount, showedTickets}) => {
  if (!ticketsCount || ticketsCount < showedTickets) {
    return null;
  }
  return (
      <button
          className="show-more-button"
          onClick={onButtonClick}
          type="button">Показать еще {ITEMS_SHOW} билетов!</button>
  )
};

export default ShowMoreButton;
