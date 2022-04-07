import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';

const App = () => {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    (async () => {
      const promise = await fetch('https://restcountries.com/v3.1/all');
      const data = await promise.json();
      setCountries(data);
      setFetching(false);
    })();
  }, []);

  return (
    <div>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {
        fetching
        ? <div>fetching data...</div>
        : <CountryList searchTerm={searchTerm} setSearchTerm={setSearchTerm} countries={countries} />
      }
    </div>
  );
};

export default App;
