import styled from "styled-components";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SkeletonCard = styled.div`
  width: 200px;
  height: 300px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const BookList = ({ books, onBookClick, isLoading }) => {
  if (isLoading) {
    return (
      <SkeletonContainer>
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </SkeletonContainer>
    );
  }

  return (
    <ListContainer>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onClick={() => onBookClick(book)} />
      ))}
    </ListContainer>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBookClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BookList;
