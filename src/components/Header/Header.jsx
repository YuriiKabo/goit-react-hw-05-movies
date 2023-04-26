import { StyledLink, StyledLi, StyledUl } from './Header.styled';
const Header = () => {
  return (
    <nav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledLi>
      </StyledUl>
    </nav>
  );
};

export default Header;
