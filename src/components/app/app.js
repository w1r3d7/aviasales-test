import React, {useState, useEffect} from 'react';

import './app.css';

import Header from '../header';
import Main from '../main';
import Filter from '../filter/filter';
import Loader from '../loader/loader';
import {sortTickets, filterTickets} from '../../utils';
import {FilterType, ITEMS_SHOW, SortType} from '../../consts';
import Error from '../error';
import Sorting from '../sorting/sorting';
import TicketsList from '../tikets-list';
import ShowMoreButton from '../show-more-button';
import ErrorBoundary from '../error-boundary';
import Api from '../../service';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [error, setError] = useState(false);
    const [showedCounter, setShowedCounter] = useState(ITEMS_SHOW);
    const [sortType, setSortType] = useState(SortType.CHEAP);
    const [filters, setFilters] = useState([FilterType.ALL]);



    useEffect(() => {
      const completeTickets = sortTickets(sortType, filterTickets(filters, tickets));
      setFilteredTickets(completeTickets);
    }, [tickets, filters, sortType]);

    useEffect(() => {
      const {getTickets} = new Api();
      getTickets()
            .then(({tickets}) => {
              setLoading(false);
              setTickets(tickets);
            })
            .catch(() => setError(true));
    }, []);

    const handleShowMoreButtonClick = () => {
      setShowedCounter(showedCounter + ITEMS_SHOW);
    }

    const handleSortButtonClick = (chosenSortType) => {
      setSortType(chosenSortType);
    }

    const handleFilterChange = (items) => {
      setShowedCounter(ITEMS_SHOW);
      setFilters(items);
    }

    const loaderOrError = error ? <Error /> : <Loader />

    const mainContent = (
        <Main>
          <div>
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div>
            <Sorting onSortButtonClick={handleSortButtonClick} currentSortType={sortType}/>
            <TicketsList tickets={filteredTickets.slice(0, showedCounter)} />
            <ShowMoreButton ticketsCount={filteredTickets.length} showedTickets={showedCounter} onButtonClick={handleShowMoreButtonClick} />
          </div>
        </Main>
    );

    return (
    <ErrorBoundary>
      <Header />
      {loading ? loaderOrError : mainContent}
    </ErrorBoundary>
)};

export default App;
