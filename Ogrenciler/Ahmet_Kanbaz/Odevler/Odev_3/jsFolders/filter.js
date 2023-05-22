let selectedList = [];
let selectedDropDown = [];
let search = "";
let sort = "";
class Filter {
  async getDatas() {
    const response = await fetch("http://localhost:3000/blogs");
    const data = await response.json();
    return data;
  }

  static getCheckedCategory = function (e) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      selectedList.push(value);
    } else {
      const index = selectedList.indexOf(value);
      if (index > -1) {
        selectedList.splice(index, 1);
      }
    }
    const filter = new Filter();
    filter.getDatas().then((datas) => {
      Filter.showBlogsWithFilter(datas);
    });
    e.preventDefault();
  };

  static getCheckedCategoryFromDropDown = function (e) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      selectedDropDown.push(value);
    } else {
      const index = selectedDropDown.indexOf(value);
      if (index > -1) {
        selectedDropDown.splice(index, 1);
      }
    }
    const filter = new Filter();
    filter.getDatas().then((datas) => {
      Filter.showBlogsWithFilter(datas);
    });
    e.preventDefault();
  };

  static getSearchInput = function (e) {
    search = searchInput.value;
    const filter = new Filter();
    filter.getDatas().then((datas) => {
      Filter.showBlogsWithFilter(datas);
    });
    e.preventDefault();
  };

  static getSortDropDown = function (e) {
    sort = e.target.id;
    const filter = new Filter();
    filter.getDatas().then((datas) => {
      Filter.showBlogsWithFilter(datas);
    });
    e.preventDefault();
  };

  static showBlogsWithFilter = function (blogs) {
    let filteredBlogs = blogs;
    if (selectedList.length > 0) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        selectedList.includes(blog.category)
      );
    }
    if (selectedDropDown.length > 0) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        selectedDropDown.includes(blog.category)
      );
    }
    if (search !== "") {
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          blog.name.toLowerCase().includes(search.toLowerCase()) ||
          blog.author.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sort !== "") {
      function sortBlogsWithBlogName(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return;
      }

      function sortBlogsWithAuthorName(a, b) {
        let x = a.author.toLowerCase();
        let y = b.author.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return;
      }

      function sortBlogsWithDate(a, b) {
        let x = new Date(a.date);
        let y = new Date(b.date);
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return;
      }

      if (sort === "blogNameA_Z") filteredBlogs.sort(sortBlogsWithBlogName);
      else if (sort === "blogNameZ_A")
        filteredBlogs.sort(sortBlogsWithBlogName).reverse();
      else if (sort === "authorNameA_Z")
        filteredBlogs.sort(sortBlogsWithAuthorName);
      else if (sort === "authorNameZ_A")
        filteredBlogs.sort(sortBlogsWithAuthorName).reverse();
      else if (sort === "dateOld2New") filteredBlogs.sort(sortBlogsWithDate);
      else if (sort === "dateNew2Old")
        filteredBlogs.sort(sortBlogsWithDate).reverse();
    }
    if(filteredBlogs == '') {
      blogsList.innerHTML = '';
      UI.toastMessage('Aramış olduğunuz blog bulunamadı.\nLütfen farklı bir blog arayınız.');
    }
    else {
      UI.updateDisplayForFilter(filteredBlogs);
    }
  };
}
