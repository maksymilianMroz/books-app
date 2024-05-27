import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.75rem;
  width: 60%;
  max-width: 500px;
  margin-right: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Search = ({ setQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for books..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
};

Search.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default Search;
