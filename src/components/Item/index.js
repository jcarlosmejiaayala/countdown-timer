import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 95px;
  border: 1px solid #e0e1e3;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  h1,
  p {
    margin: 0;
  }

  > h1 {
    font-size: 21px;
    font-weight: 400;
    line-height: 1.25;
  }

  > p {
    font-size: 11px;
    font-weight: 500;
    color: #bbb3b1;
    line-height: 1.75;
  }
`;

const Item = ({ count, kind }) => (
  <StyledItem>
    <h1>{count}</h1>
    <p>{kind}</p>
  </StyledItem>
);

export default Item;
