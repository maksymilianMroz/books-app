import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  color: #fff;
  height: calc(100vh - 60px); /* Odejmujemy wysokość navbaru i footera */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to the Book Catalog</Title>
      <Subtitle>Discover and explore a variety of books.</Subtitle>
    </HomeContainer>
  );
};

export default Home;
