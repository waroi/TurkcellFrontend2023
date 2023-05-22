const id = new URLSearchParams(window.location.search).get('id');
class Post {
    constructor(title,writing,writer,dateAndTime,picture,category) {
        this.title = title;
        this.writing = writing;
        this.writer = writer;
        this.dateAndTime=dateAndTime;
        this.picture = picture;
        this.category = category;
    }
}
const date = new Date();
const day = `${date.getDate()}`.padStart(2,0);
const month = `${date.getMonth()+1}`.padStart(2,0);
const year = date.getFullYear();
const hour = `${date.getHours()}`.padStart(2,0);
const min = `${date.getMinutes()}`.padStart(2,0);
const sec = `${date.getSeconds()}`.padStart(2,0);

const updateBookForm = async() =>{
    fetch(`http://localhost:3000/posts/${id}`)
             .then((response) => response.json())
             .then((data) =>
             {
                 document.getElementById("title").value=data.title;
                 document.getElementById("writing").value = data.writing;
                 document.getElementById("writer").value= data.writer;
                 document.getElementById("picture").value =data.picture;
                 document.querySelector('input[name="category"]:checked').value = data.category;
             } 
             )
             .catch((err) => console.log(err));
 }
 
 updateBookForm();
const updatePost = async (e) =>{
    e.preventDefault();

    const title = document.getElementById("title").value;
    const writing = document.getElementById("writing").value;
    const writer = document.getElementById("writer").value;
    const dateAndTime = `${day}/${month}/${year},${hour}:${min}:${sec}`;
    const picture = document.getElementById("picture").value;
    const category = document.querySelector('input[name="category"]:checked').value;


    const post = new Post(title,writing,writer,dateAndTime,picture,category);
    await fetch('http://localhost:3000/posts/'+ id, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.replace('/index.html');
}


document.getElementById("blogForm").addEventListener("submit", updatePost);