import React from 'react';

import './ticket.css';
import {formatDuration, formatDateToHoursAndMinutes} from '../../utils';

const Ticket = ({
    price,
    carrier,
    segments
                }) => {
  return (
  <div className="ticket">
    <div className="ticket__header">
      <span>{price.toLocaleString()} P</span>
      <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="airplane company logo"/>
    </div>

    {
      segments.map(({
          origin,
          destination,
          date,
          stops,
          duration
                    }) => {

        let transferText = 'Без пересадок';
        if (stops.length === 1) {
          transferText = '1 пересадка';
        } else if (stops.length > 1) {
          transferText = `${stops.length} пересадки`
        }

        return (
            <div className="ticket__segment" key={price + duration}>
              <div className="ticket__segment-item">
                <span>{origin} - {destination}</span>
                <span>{formatDateToHoursAndMinutes(date, duration)}</span>
              </div>
              <div className="ticket__segment-item">
                <span>В пути</span>
                <span>{formatDuration(duration)}</span>
              </div>
              <div className="ticket__segment-item">
                <span>{transferText}</span>
                <span>{stops.toString()}</span>
              </div>
            </div>
        )
      })
    }

  </div>
)};

export default Ticket;
