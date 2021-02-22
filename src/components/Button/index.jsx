import React from 'react'
import styled from "styled-components";

export const PrimaryButton = styled.button`
  height: 60px;
  background-color: #E8C300;
  width: ${props => props.width};
  margin: ${props => props.margin};
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: unset;
  box-sizing: border-box;
`;

export const OutlineButton = styled(PrimaryButton)`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  background-color: transparent;
`;
