import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Books.css";

function Books() {
  const [books, setBooks] = useState({});
  const [activeTab, setActiveTab] = useState("Leadership");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/books.json");
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="books" className="books">
      <h2>Books I Recommend</h2>
      <div className="tabs">
        {Object.keys(books).map((category) => (
          <button
            key={category}
            className={`tab ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="highlighted-book">
        <h3>{books[activeTab][0].title}</h3>
        <p>{books[activeTab][0].author}</p>
        <a href={books[activeTab][0].link} target="_blank" rel="noopener noreferrer">
          <img src={books[activeTab][0].cover} alt={`${books[activeTab][0].title} cover`} />
        </a>
      </div>
      <Carousel responsive={responsive} 
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
        customTransition="transform 500ms ease-in-out"
        showDots
        removeArrowOnDeviceType={["tablet", "mobile"]}>
        {books[activeTab].slice(1).map((book, index) => (
          <div key={index} className="book-item">
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <img src={book.cover} alt={`${book.title} cover`} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Books;