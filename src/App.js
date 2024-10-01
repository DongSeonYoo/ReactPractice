import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const apiSrc = "https://api.coinpaprika.com/v1/tickers";
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(apiSrc)
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>the coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, i) => (
            <option>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
