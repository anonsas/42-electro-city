import React, { useState, useEffect } from 'react';
import './Home.scss';
import ElectricTower from '../../assets/electric-tower.svg';
import axios from 'axios';

function Home() {
  const [list, setList] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then((response) => {
        setList(structuredList(response.data));
      })
      .catch((error) => alert(error.message));
  }, []);

  const structuredList = (data) => {
    const newData = new Map();
    data.forEach((obj) => {
      if (newData.has(obj.supName)) {
        newData.set(obj.supName, [...newData.get(obj.supName), obj]);
      } else {
        newData.set(obj.supName, [obj]);
      }
    });

    return [...newData];
  };

  return (
    <div className="home">
      <img src={ElectricTower} alt="electric tower" className="electric-tower" />
      <h2>Suppliers with their consumers:</h2>
      <ul className="supplier-list">
        {list?.map((supplier) => (
          <li key={supplier[0]} className="supplier">
            <h3>{supplier[0]}</h3>
            <ul className="consumer-list">
              {supplier[1].map((consumer) => (
                <li key={consumer.id} className="consumer">
                  <h5>{consumer.name}</h5>
                  <h5>{consumer.surname}</h5>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
