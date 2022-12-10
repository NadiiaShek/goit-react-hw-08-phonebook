import styled from 'styled-components';
export const Email = styled.p`
  font-size: 20px;
  color: dark blue;
  margin: 0;
  margin-left: auto;
  margin-right: 30px;
`;
export const Button = styled.button`
  transition: cubic-bezier(0.17, 0.67, 0.57, 0.48);
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: #3086b2;
  color: dark blue;
  border: 4px solid dark blue;
  border-radius: 10px;
  max-height: 50px;
  transition: cubic-bezier(0.17, 0.67, 0.57, 0.48);
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
`;
export const Box = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: darkblue;
`;
