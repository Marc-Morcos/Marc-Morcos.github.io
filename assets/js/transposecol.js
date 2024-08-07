// Take 1d array that would be split into 3 cols and transpose it
document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById('post-list');

    //get number of columns
    let numColumns = 1;
    try{
        const element = document.getElementById('post-container'),
            style = window.getComputedStyle(element),
            count = style.getPropertyValue('column-count');
            if(!isNaN(count)){
                numColumns = count;
            }
    }catch(e) {
        console.log(e);
    }

    //no need to do anything if one column
    if(numColumns == 1){
        return;
    }
    
    const posts = Array.from(postList.getElementsByClassName('post-item'));
    
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