/* AllmembersStyles.js */

import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    font-family: serif;
    font-size: 4em;
    color: #fff;
  }

  .grid1 {
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 20px; /* Add padding to the container */
    box-sizing: border-box; /* Ensure padding doesn't affect width */
  }

  .box {
    position:relative;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out;
    // background-color:white;
  }

  .box:hover {
    transform: scale(1.05);
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img {
    width: 100%;
    max-width: 150px; /* Set a max-width for the image */
    margin-bottom: 15px;
    overflow: hidden; /* Ensure image doesn't overflow its container */
    border-radius: 20%;
  }

  .img img {
    width: 100%;
    height: 100%; /* Ensure the image fills its container */
    object-fit: cover; /* Maintain aspect ratio and cover container */
  }

  .names h4 {
    font-size: 1.5em;
    margin-bottom: 5px;
    color: white;
  }
   
  .names span {
    color: orange;;
  }
`;

/* Add any additional styling or adjustments you need */
