import React from 'react';
import uuid from 'react-uuid'

import './tickets-list.css';

import Ticket from '../ticket';

const TicketsList = ({tickets}) => {
    if(!tickets.length) {
        return <h2>По вашему фильтру билеты не найдены.</h2>;
    }
    return (
        <ul className="ticket-list">
            {tickets.map((ticket) => {
                return (
                    <li key={uuid()}><Ticket {...ticket} /></li>
                )
            })}
        </ul>
    );
}

export default TicketsList;
