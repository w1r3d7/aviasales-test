import React from 'react';

import './loader.css';

const Loader = () => {
  return (
      <div className="loader-wrapper">
        <div className="sk-chase">
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
          <div className="sk-chase-dot"/>
        </div>
      </div>
  )
}

export default Loader;
