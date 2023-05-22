function filterBlogs() {
  const blogCategories = document.querySelectorAll('.blog-category');
  for (const category of blogCategories) {
    category.addEventListener('click', async (e) => {
      const clickedCategory = e.target.dataset.category;
      
      try {
        let response;
        if (clickedCategory === "all") {
          response = await fetch(`http://localhost:3000/blogs`);
        } else {
          response = await fetch(`http://localhost:3000/blogs?category=${clickedCategory}`);
          sortBlogs()
        }
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        
        displayFilteredBlogs(data);
      } catch (error) {
        console.error(error);
      }
    });
  }
}
async function sortBlogs() {
  const sortBlog = document.querySelectorAll('.blog-sort');

  sortBlog.forEach((sort) => {
    sort.addEventListener('click', async (e) => {
      const sortValue = e.target.innerText;
      const response = await fetch('http://localhost:3000/blogs');
      const data = await response.json();
      switch (sortValue) {
        case " Newer first":
          data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
          })
          break;
        case " Older first":
          data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
          })
          break;
        case " Title(ascending)":
          data.sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
          break;
        case "Title(descending)":
          data.sort((a, b) => {
            return b.title.localeCompare(a.title);
          })
          break;
        case " Author(ascending)":
          data.sort((a, b) => {
            let authorAscending = a.author.localeCompare(b.author);
            return authorAscending;
          })
          break;
        case " Author(descending)":
          data.sort((a, b) => {
            return b.author.localeCompare(a.author);
          })
          break;
      }

      displayFilteredBlogs(data);
    });
  });
}