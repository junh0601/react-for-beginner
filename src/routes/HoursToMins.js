import { useState } from "react";
import { Link } from "react-router-dom";

const HoursToMins = () => {
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [flip, setFlip] = useState(false);
  const onChange = (e) => {
    setMin(e.target.value);
  };
  const onConvert = () => {
    setFlip((current) => !current);
  };
  const onReset = () => {
    setMin(0);
    setHour(0);
  };
  return (
    <div>
      <Link to="/">뒤로가기</Link>
      <h1>시분 변환기</h1>
      <input onChange={onChange} value={hour / 60} placeholder="분" disabled={flip}></input>
      <input onChange={onChange} value={min / 60} placeholder="시" disabled={!flip}></input>
      <button onClick={onConvert}>시-분 전환</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
};

export default HoursToMins;
