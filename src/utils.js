
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MILLISECONDS_IN_MINUTE = 1000;

const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

const formatDuration = (duration) => {
  let result = '';
  let balance = duration;
  const days = duration / MINUTES_IN_DAY;
  if (days > 1) {
    result += `${Math.floor(days)}д `;
    balance = duration % MINUTES_IN_DAY;
  }

  const hours = balance / MINUTES_IN_HOUR;
  if (hours > 1) {
    result += `${Math.floor(hours)}ч `;
    balance = balance % MINUTES_IN_HOUR;
  }

  const minutes = balance;
  if (minutes > 1) {
    result += `${minutes}м `;
  }

  return result;
}

const formatDateToHoursAndMinutes = (date, duration) => {
  const dateFrom = new Date(date);
  const dateTo = new Date(dateFrom.getTime() + minToMilliseconds(duration));
  return `${dateFrom.getHours()}:${dateFrom.getMinutes()} - ${dateTo.getHours()}:${dateTo.getMinutes()}`
}

const minToMilliseconds = (minutes) => {
  return minutes * MINUTES_IN_HOUR * MILLISECONDS_IN_MINUTE;
}

export {formatDuration, formatDateToHoursAndMinutes};

