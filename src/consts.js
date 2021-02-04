const ITEMS_SHOW = 5;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MILLISECONDS_IN_MINUTE = 1000;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

const SortType = {
  CHEAP: 'cheap',
  FAST: 'fast',
  OPTIMAL: 'optimal'
};

const FilterType = {
  ALL: 'all',
  WITHOUT_TRANSFER: 'without-transfer',
  ONE_TRANSFER: 'one-transfer',
  TWO_TRANSFERS: 'two-transfers',
  THREE_TRANSFERS: 'three-transfers'
}

const TransferCount = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

export {
  ITEMS_SHOW,
  HOURS_IN_DAY,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_MINUTE,
  MINUTES_IN_DAY,
  SortType,
  FilterType,
  TransferCount
}
