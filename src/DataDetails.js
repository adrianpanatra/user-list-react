import logo from './logo.svg';
import { Table } from 'react-bootstrap';
import * as React from 'react';

function DataDetails(props) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${props.page}&results=10&pageSize=5&keyword=${props.keyword}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [props.page]);
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Registered Date</th>
          </tr>
        </thead>
        <tbody>
          {items.results?.map((item, index) => (
          <tr key={index}>
            <td>{item.login.username}</td>
            <td>{item.name.first + ' ' + item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.registered.date}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataDetails;
