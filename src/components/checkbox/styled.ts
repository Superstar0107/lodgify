import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 2.5rem;
  cursor: pointer;
  color: #000;
  font-weight: 400;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input:checked ~ span {
    background-color: var(--color-primary);
  }

  span:after {
    left: 5px;
    top: 1px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input:checked ~ span:after {
    display: block;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  width: 1rem;
  background-color: white;
  border: 1px solid #d9d5d5;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;
