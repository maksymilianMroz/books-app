import { useState, useEffect } from "react";
import styled from "styled-components";
import BookList from "../components/BookList";
import Search from "../components/Search";
import Modal from "../components/Modal";

const BooksContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  min-height: 80vh;
`;

const ModalContentWrapper = styled.div`
  text-align: center;
`;

const BookImage = styled.img`
  max-width: 150px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BookTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const BookAuthors = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const BookDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`;

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("react");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
        setIsLoading(false);
      });
  }, [query]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <BooksContainer>
      <Search setQuery={setQuery} />
      <BookList
        books={books}
        onBookClick={handleBookClick}
        isLoading={isLoading}
      />
      <Modal isOpen={!!selectedBook} onClose={handleCloseModal}>
        {selectedBook && (
          <ModalContentWrapper>
            <BookImage
              src={selectedBook.volumeInfo.imageLinks?.thumbnail}
              alt={selectedBook.volumeInfo.title}
            />
            <BookTitle>{selectedBook.volumeInfo.title}</BookTitle>
            <BookAuthors>
              {selectedBook.volumeInfo.authors?.join(", ")}
            </BookAuthors>
            <BookDescription>
              {selectedBook.volumeInfo.description}
            </BookDescription>
          </ModalContentWrapper>
        )}
      </Modal>
    </BooksContainer>
  );
};

export default Books;
