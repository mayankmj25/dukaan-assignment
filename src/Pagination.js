// PaginationComponent.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Create an array with the size of total pages for mapping the buttons
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div style={styles.paginationContainer}>
      <button 
        style={styles.pageButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map(number => (
        <button 
          key={number} 
          style={styles.pageButton}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      <button 
        style={styles.pageButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    // Add other styles as needed
  },
  pageButton: {
    border: '1px solid #ddd',
    padding: '5px 10px',
    margin: '0 5px',
    cursor: 'pointer',
    // Adjust styles to match the design
    backgroundColor: '#f0f0f0',
    // Add styles for active button
  },
  // Add styles for active page button
  activePageButton: {
    backgroundColor: '#333',
    color: '#fff',
    // Add other styles as needed
  }
};

export default Pagination;
