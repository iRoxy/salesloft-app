import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

const [people, setPeople] = useState([]);
const [isLoading, setIsLoading] = useState(true);

function sortData() {

}

async function getPeople() {
  let res = await axios.get('/list-people');
  console.log('response:', res);
  setPeople(res.data);
  setIsLoading(false);
}


useEffect(() => {
  getPeople()
}, []);

console.log('frontend: ', people);

  return (
    <div className="App">
      <h1>People</h1>
      {isLoading && <p>Loading people...</p>}
      {people.length != 0 && (<button oncClick={sortData}>Count Characters</button>)}
      {people.map((person) => (
        <p>{person.display_name}</p>
      ) )}
    </div>
  );
}

export default App;
