import React from "react";
import styled from "styled-components";

import CountDownTimer from "../CountDownTimer";

const StyledApp = styled.div`
  max-width: 1080px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const App = () => (
  <StyledApp>
    <CountDownTimer />
  </StyledApp>
);

export default App;
