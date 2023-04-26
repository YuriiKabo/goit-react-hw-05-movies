import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: green;
  }
`;
const StyledLi = styled.li`
  list-style: none;
  margin-left: 35px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
`;
export { StyledLi, StyledLink, StyledUl };
