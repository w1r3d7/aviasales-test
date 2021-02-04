import {
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MINUTES_IN_DAY,
  SortType,
  FilterType,
  TransferCount
} from './consts';

const addPad = (time) => {
  return time.toString().padStart(2, '0');
}

const formatDuration = (duration) => {
  let result = '';
  let balance = duration;
  const days = duration / MINUTES_IN_DAY;
  if (days > 1) {
    result += `${addPad(Math.floor(days))}д `;
    balance = duration % MINUTES_IN_DAY;
  }

  const hours = balance / MINUTES_IN_HOUR;
  if (hours > 1) {
    result += `${addPad(Math.floor(hours))}ч `;
    balance = balance % MINUTES_IN_HOUR;
  }

  const minutes = balance;
  if (minutes > 1) {
    result += `${addPad(minutes)}м `;
  }

  return result;
}

const formatDateToHoursAndMinutes = (date, duration) => {
  const dateFrom = new Date(date);
  const dateTo = new Date(dateFrom.getTime() + minToMilliseconds(duration));
  const formattedDateFrom = `${addPad(dateFrom.getHours())}:${addPad(dateFrom.getMinutes())}`;
  const formattedDateTo = `${addPad(dateTo.getHours())}:${addPad(dateTo.getMinutes())}`;
  return `${formattedDateFrom} - ${formattedDateTo}`
}

const minToMilliseconds = (minutes) => {
  return minutes * MINUTES_IN_HOUR * MILLISECONDS_IN_MINUTE;
}

const getData = () => {
  return fetch('https://front-test.beta.aviasales.ru/search')
        .then((data) => data.json())
        .then(({searchId}) => {
          return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
              .then((res) => res.json())
      });
};

const sortTickets = (sortType, tickets) => {
  switch (sortType) {
    case SortType.CHEAP:
      return tickets.slice().sort((a, b) => a.price - b.price);
    case SortType.FAST:
      return tickets.slice().sort((a, b) => {
        const [fromA, toA] = a.segments;
        const [fromB, toB] = b.segments;
        return (fromA.duration + toA.duration) - (fromB.duration + toB.duration);
      });
    case SortType.OPTIMAL:
      return tickets.slice().sort((a, b) => {
        const [fromA, toA] = a.segments;
        const [fromB, toB] = b.segments;
        return (fromA.stops.length + toA.stops.length) - (fromB.stops.length + toB.stops.length);
      });
    default:
      return tickets;
  }
}

const filterByTransfers = (tickets, transferCount) => {
  return tickets.filter(({segments}) => {
    const [from, to] = segments;
    return from.stops.length === transferCount && to.stops.length === transferCount;
  })
}

const filterTickets = (filters, tickets) => {
  if (filters.includes(FilterType.ALL)) {
    return tickets;
  }

  const result = [];

  filters.forEach((filter) => {
    if (filter === FilterType.ONE_TRANSFER) {
      const filteredTickets = filterByTransfers(tickets, TransferCount.ONE);
      result.push(...filteredTickets);
    }

    if (filter === FilterType.TWO_TRANSFERS) {
      const filteredTickets = filterByTransfers(tickets, TransferCount.TWO);
      result.push(...filteredTickets);
    }

    if (filter === FilterType.THREE_TRANSFERS) {
      const filteredTickets = filterByTransfers(tickets, TransferCount.THREE);
      result.push(...filteredTickets);
    }

    if (filter === FilterType.WITHOUT_TRANSFER) {
      const filteredTickets = filterByTransfers(tickets, TransferCount.ZERO);
      result.push(...filteredTickets);
    }
  });

  return result;
}

export {formatDuration, formatDateToHoursAndMinutes, getData, sortTickets, filterTickets};

