import React from 'react';

import './tickets-list.css';

import Ticket from '../ticket';

const TicketsList = ({data}) => (
    <ul className="ticket-list">
      {data.map((ticket, idx) => {
        return (
            <li key={ticket.price + idx}><Ticket {...ticket} /></li>
        )
      })}
    </ul>
);

export default TicketsList;
