import { blogList , 
    blogTitle ,
    blogContent ,
    blogAuthor ,
    blogDate ,
    blogImgUrl ,
    blogCategory ,
} from "./selectors.js";


class UI {
    static loadAllBlogsToUI(blogs) {
        blogs.map(blog => {
            this.addBlogToUI(blog);
        });
    }
    static addBlogToUI(blog) {
        blogList.innerHTML += `
        <tr id ="${blog.id}">
            <td>${blog.title}</td>
            <td>${blog.detail}</td>
            <td>${blog.author}</td>
            <td>${blog.id}</td>
            <td><a href="#" id = "delete-blog" class = "btn btn-danger">Delete</a></td>
            <td><a href="#" id = "update-blog" class = "btn btn-success">Update</a></td>
        </tr>
        `;
    }
    static deleteBlogFromUI(e) {
        e.parentElement.parentElement.remove();
    }
    static updateBlogToUI(blog) {
        const existingBlog = document.querySelector(`#${blog.id}`);
        existingBlog.innerHTML = `
        <tr id ="${blog.id}">
            <td>${blog.title}</td>
            <td>${blog.detail}</td>
            <td>${blog.author}</td>
            <td>${blog.id}</td>
            <td><a href="#" id = "delete-blog" class = "btn btn-danger">Delete</a></td>
            <td><a href="#" id = "update-blog" class = "btn btn-success">Update</a></td>
        </tr>
        `;


    }
    static showAlert(message, className) {
        const alert = `
        <div class = "alert alert-${className}">
            ${message}
        </div>
        `;
        const row = document.querySelector(".row");
        row.insertAdjacentHTML("beforebegin", alert);
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
    static clearInputs() {
        blogAuthor.value = "";
        blogCategory.value = "";
        blogContent.value = "";
        blogDate.value = "";
        blogImgUrl.value = "";
        blogTitle.value = "";

    }
    static clearAllBlogsFromUI() {
        while (blogList.firstElementChild !== null) {
            blogList.firstElementChild.remove();
        }
    }
}