import React, { Component } from "react";
import styled from "styled-components";

import Item from "../Item";

const StyledWrapper = styled.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

function capitalCase(name) {
  return `${name[0].toUpperCase()}${name.slice(1)}`;
}

class CountDownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countDownDate: new Date("Sep 29, 2018 15:37:25").getTime(),
      counter: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  }

  updateTimer() {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = this.state.countDownDate - now;

      this.setState({
        counter: {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }
      });
    }, 1000);
  }

  render() {
    const { counter } = this.state;

    return (
      <StyledWrapper>
        {Object.keys(counter).map(item => (
          <Item key={item} count={counter[item]} kind={capitalCase(item)} />
        ))}
      </StyledWrapper>
    );
  }

  componentDidMount() {
    this.updateTimer();
  }
}

export default CountDownTimer;
