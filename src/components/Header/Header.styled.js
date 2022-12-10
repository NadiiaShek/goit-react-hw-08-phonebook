import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: #1e81b0;
  color: dark blue;
  border-color: dark blue;
  border-radius: 10px;
  border-width: 0 0 4px;
  max-height: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #1e81b0;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  &:not(:last-child) {
    margin-left: 30px;
    margin-right: 40px;
  }

  &.active {
    pointer-events: none;
    background-color: #1e81b0;
  }
`;
