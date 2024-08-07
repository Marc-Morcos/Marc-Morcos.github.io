// Take 1d array that would be split into 3 cols and transpose it
document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById('post-list');
    const posts = Array.from(postList.getElementsByClassName('post-item'));
    const numColumns = 3;
    const numRows = Math.ceil(posts.length / numColumns);
  
    // Create an array to hold the transposed order
    const transposedPosts = new Array(posts.length);
  
    posts.forEach((post, index) => {
      const rowIndex = Math.floor(index / numColumns);
      const colIndex = index % numColumns;
      const transposedIndex = colIndex * numRows + rowIndex;
      transposedPosts[transposedIndex] = post;
    });
  
    // Clear the original list and append transposed posts
    postList.innerHTML = '';
    transposedPosts.forEach(post => {
      postList.appendChild(post);
    });
  });