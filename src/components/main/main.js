import React from 'react';

import './main.css';

const Main = ({left, right}) => (
  <main className="main">
    <div className="main__left">
      {left}
    </div>
    <div className="main__right">
      {right}
    </div>
  </main>
);

export default Main;
