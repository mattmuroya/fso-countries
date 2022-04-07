const CountryList = ({ searchTerm, setSearchTerm, countries }) => {

  let countriesToShow = countries.filter(country => (
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    || country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const exactMatch = countriesToShow.find(country => country.name.common === searchTerm);

  if (exactMatch) {
    console.log(exactMatch);
    countriesToShow = [exactMatch];
  }

  if (countriesToShow.length > 10) return (
    <div>Please narrow your search</div>
  );

  if (countriesToShow.length === 0) return (
    <div>No results</div>
  );

  if (countriesToShow.length === 1) {
    const country = countriesToShow[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <h4>{country.name.official}</h4>
        <p>Capital: {country.capital[0]}</p>
        <h5>Languages:</h5>
        <ul>
          {Object.values(country.languages).map(lang => {
            return <li key={lang}>{lang}</li>
          })}
        </ul>
        <img alt={`Flag of ${country.name.common}`} src={country.flags.png} />
      </div>
    );
  }

  return (
    <ul>
      {countriesToShow.map(country => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => setSearchTerm(country.name.common)}>show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
