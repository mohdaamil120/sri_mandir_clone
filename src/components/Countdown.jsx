import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  gap:20px;
`;

const CountdownItem = styled.div`
span:nth-child(1){
    font-size: 25px;
}
span:nth-child(2){
    font-size: 14px;
    margin-top: 10px;
}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  gap:5px;
  padding: 4px 6px;
background-color: #FEF5EC;
color: #F49612;
`;

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date('2024-07-19T00:00:00.000Z'); // Set the target date and time

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CountdownContainer>
      <CountdownItem>
        <span>{days}</span>
        <span>Days</span>
      </CountdownItem>
      <CountdownItem>
        <span>{hours}</span>
        <span>Hours</span>
      </CountdownItem>
      <CountdownItem>
        <span>{minutes}</span>
        <span>Minutes</span>
      </CountdownItem>
      <CountdownItem>
        <span>{seconds}</span>
        <span>Seconds</span>
      </CountdownItem>
    </CountdownContainer>
  );
};

export default Countdown;