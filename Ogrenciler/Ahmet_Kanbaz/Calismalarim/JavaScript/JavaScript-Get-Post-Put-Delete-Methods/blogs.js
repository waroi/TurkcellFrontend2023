class Blogs {
  static addBlogs(blog) {
    getDataRow.innerHTML += `
        <br>
          <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.summary}</td>
            <td>${blog.date}</td>
          </tr>
        `;
  }
}