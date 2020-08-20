import styled from 'styled-components';

export const DropdownButton = styled.button`
  width: 224px;
  align-self: center;
  text-align: left;
  padding: 0 0 0 5px;
  margin: 0;
  border: solid black 2px;
  background: white;
  position: relative;
`;

export const DropdownOption = styled.button`
  margin: 0;
  padding: 0 0 0 5px;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
`;

export const DropdownList = styled.ul`
  background: white;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: solid black 2px;
  width: 220px;
  position: absolute;
  top: 17px;
  left: -2px;
  right: 0;
`;