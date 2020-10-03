import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ title, handleClick }) => (
  <button onClick={handleClick}>{title}</button>
);

const Statistics = ({ statistics }) =>
  statistics.map((statistic, index) => (
    <Statistic
      key={index}
      title={statistic.title}
      value={statistic.value}
      isPercent={statistic.isPercent}
    />
  ));

const Statistic = ({ title, value, isPercent }) => (
  <p>
    {title} {value.toString()} {isPercent && "%"}
  </p>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = (good / total) * 100 || 0;

  const statistics = [
    { title: "Good", value: good, isPercent: false },
    { title: "Neutral", value: neutral, isPercent: false },
    { title: "Bad", value: bad, isPercent: false },
    { title: "Total", value: total, isPercent: false },
    { title: "Average", value: average, isPercent: false },
    { title: "Positive", value: positive, isPercent: true },
  ];

  return (
    <div>
      <Header title="Give Feedback!" />
      <>
        <Button title="Good" handleClick={() => setGood((good) => good + 1)} />
        <Button
          title="Neutral"
          handleClick={() => setNeutral((neutral) => neutral + 1)}
        />
        <Button title="Bad" handleClick={() => setBad((bad) => bad + 1)} />
      </>
      <Header title="Statistics:" />
      <Statistics statistics={statistics} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
