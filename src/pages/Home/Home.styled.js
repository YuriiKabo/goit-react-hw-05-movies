import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  list-style: none;
  margin-left: 35px;
`;

export const StyledLink = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  margin: 20px;
  &.active {
    color: orange;
  }
`;

export const StyledActorUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`;
