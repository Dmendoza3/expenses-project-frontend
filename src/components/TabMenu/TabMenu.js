import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import styles from './TabMenu.module.css';


import Reports from '../Reports/Reports';
import ExpensesForm from '../ExpensesForm/ExpensesForm';

export default function TabMenu() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <div className="container" data-testid="TabMenu">
        <div className="row">
          <ul className="nav nav-tabs">
            <li className="nav-item" onClick={() => setSelectedTab(1)}>
              <a className="nav-link active" href="#">Add new expenses</a>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab(2)}>
              <a className="nav-link" href="#">View expenses</a>
            </li>
          </ul>
          <div classNam="tab-content">
            <div className="tab-pane">
              {selectedTab === 1 && <><ExpensesForm /></>}
              {selectedTab === 2 && <><Reports /></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
