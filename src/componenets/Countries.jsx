import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountryData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    getCountryData();
  }, []);

  return (
    <>
      <section className="page">
        {countries.map((country) => {
          const { cca3, altSpellings, population, region, capital, flags } =
            country;
          return (
            <article key={cca3}>
              <div>
                <img src={flags.svg} alt={flags.alt} />
                <div className="details">
                  <h3>{altSpellings[1]}</h3>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
