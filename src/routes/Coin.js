import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((data) => data.json())
      .then((json) => {
        setData(json);
        console.log(json);
        setLoading(false);
      });
  });
  return (
    <div class="container">
      <div>
        <Link to="/">🔙뒤로가기</Link>
      </div>
      <h1>coin 시세</h1>
      {loading ? (
        "코인 데이터 로딩중"
      ) : (
        <ul>
          {data.map((data) => (
            <li key={data.id}>
              {data.name}({data.symbol}) : ${data.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
      <div></div>
    </div>
  );
};

export default Coin;
