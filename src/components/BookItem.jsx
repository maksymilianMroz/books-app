import styled from "styled-components";
import PropTypes from "prop-types";

const BookCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
  background-color: #f8f9fa;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const BookImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const BookTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const BookAuthors = styled.p`
  font-size: 0.875rem;
  color: #555;
`;

const BookItem = ({ book, onClick }) => {
  const { volumeInfo } = book;
  const { title, authors, imageLinks } = volumeInfo;

  return (
    <BookCard onClick={onClick}>
      <BookImage src={imageLinks?.thumbnail} alt={title} />
      <BookTitle>{title}</BookTitle>
      <BookAuthors>{authors?.join(", ")}</BookAuthors>
    </BookCard>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookItem;
