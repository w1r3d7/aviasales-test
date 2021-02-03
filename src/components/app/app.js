import React from 'react';

import './app.css';

import Header from '../header';
import Main from '../main';
import Filter from '../filter/filter';
import Sorting from '../sorting/sorting';
import TicketsList from '../tikets-list';

import {data} from '../../data';

const App = () => (
    <>
      <Header />
      <Main
          left={<Filter />}
          right={
            <>
              <Sorting />
              <TicketsList  data={data.tickets} />
            </>
          }/>
    </>

);

export default App;
