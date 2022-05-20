import { Pagination } from 'react-bootstrap';
import * as React from 'react';
import './App.css';
import DataDetails from './DataDetails';

function App() {
  const [pagination, setPagination] = React.useState(1);

  const changePagination = (position) => {
    setPagination(position);
    console.log("ayamg", position);
  }

  let paginationLists = [];
  for (let number = 1; number <= 5; number++) {
    paginationLists.push(
      <Pagination.Item key={number} active={number === pagination} onClick={() => changePagination(number)}>
        {number}
      </Pagination.Item>,
    )};

  return (
    <div className="App">
      <DataDetails page={pagination} />
      <Pagination onChange={changePagination}>{paginationLists}</Pagination>
    </div>
  );
}

export default App;
