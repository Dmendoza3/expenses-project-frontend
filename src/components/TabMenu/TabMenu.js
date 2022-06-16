import React, { useState } from 'react';
import Reports from '../Reports/Reports';
import ExpensesForm from '../ExpensesForm/ExpensesForm';
import CategoriesForm from '../CategoriesForm/CategoriesForm';

export default function TabMenu() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <div className="container border mt-4" data-testid="TabMenu">
        <div className="row">
          <h3 className='border pb-2'>Expenses manager</h3>
        </div>
        <div className="row">
          <ul className="nav nav-tabs">
            <li className="nav-item" onClick={() => setSelectedTab(1)}>
              <button className={'nav-link ' + ((selectedTab === 1) ?'active':'')} href="#">Add new expenses</button>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab(2)}>
              <button className={'nav-link ' + ((selectedTab === 2) ?'active':'')} href="#">View expenses</button>
            </li>
            <li className="nav-item" onClick={() => setSelectedTab(3)}>
              <button className={'nav-link ' + ((selectedTab === 3) ?'active':'')} href="#">Add new categories</button>
            </li>
          </ul>
          <div classNam="tab-content">
            <div className="tab-pane">
              {selectedTab === 1 && <><ExpensesForm /></>}
              {selectedTab === 2 && <><Reports /></>}
              {selectedTab === 3 && <><CategoriesForm /></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
