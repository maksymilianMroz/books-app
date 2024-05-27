import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #007bff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Katalog Książek</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
