import React, { useCallback, useState } from "react";
import Button from "./button";
import Count from "./count";
import Title from "./title";

const Home = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(2000000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000000);
  }, [salary]);
  return (
    <div className="bg-primary text-white " style={{ minHeight: "100vh" }}>
      <Title />
      <Count text="age" Count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" Count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default Home;
