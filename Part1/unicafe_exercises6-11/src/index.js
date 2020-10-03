import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ title }) => <h1>{title}</h1>;

const Options = ({ options }) =>
  options.map((option, index) => (
    <Button key={index} text={option.text} handleClick={option.onChange} />
  ));

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ statistics, hasFeedback }) =>
  hasFeedback ? (
    statistics.map((statistic, index) => (
      <Statistic
        key={index}
        text={statistic.text}
        value={statistic.value}
        isPercent={statistic.isPercent}
      />
    ))
  ) : (
    <p>No feedback has been given.</p>
  );

const Statistic = ({ text, value, isPercent }) => (
  <p>
    {text} {value.toString()} {isPercent && "%"}
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

  const feedbackOptions = [
    { text: "Good", onChange: () => setGood((good) => good + 1) },
    { text: "Neutral", onChange: () => setNeutral((neutral) => neutral + 1) },
    { text: "Bad", onChange: () => setBad((bad) => bad + 1) },
  ];

  const statistics = [
    { text: "Good", value: good, isPercent: false },
    { text: "Neutral", value: neutral, isPercent: false },
    { text: "Bad", value: bad, isPercent: false },
    { text: "Total", value: total, isPercent: false },
    { text: "Average", value: average, isPercent: false },
    { text: "Positive", value: positive, isPercent: true },
  ];

  return (
    <div>
      <Header title="Give Feedback!" />
      <Options options={feedbackOptions} />
      <Header title="Statistics:" />
      <Statistics statistics={statistics} hasFeedback={total !== 0} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
