document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movie-form");
    const movieCollection = document.getElementById("movie-collection");
    const { v4: uuidv4 } = require('uuid');
    loadMovies();

    movieForm.addEventListener("submit", (event) => {
        event.preventDefault();/*formun sayfayı yenileme veya başka bir sayfaya yönlendirme gibi varsayılan davranışlarını önler. */

        const movieData = {
            id: uuidv4(),
            title: event.target.title.value,
            director: event.target.director.value,
            year: event.target.year.value,
            genre: event.target.genre.value,
            posterUrl: event.target.posterUrl.value
        };

        addMovie(movieData);
        saveMovie(movieData);

        movieForm.reset();/*formda girilen tüm verileri temizler, böylece kullanıcı bir sonraki film eklemek için yeni bir form oluşturabilir. */
    });

    /*film nesneleri sayfa yenilendiğinde yeniden yüklenir ve görüntülenir. */
    function loadMovies() {
        const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];/*Eğer "movies" anahtarına sahip veriler depolanmamışsa veya bir hata oluşmuşsa, boş bir dizi oluşturulur.*/
        storedMovies.forEach(movie => addMovie(movie));
    }

    function addMovie(movieData) {
        const movieCard = document.createElement("div");
        movieCard.classList.add("card", "mb-3");
        movieCard.style.width = "18rem";
        movieCard.dataset.movieId = movieData.id;
        
        movieCard.innerHTML = `
            <img src="${movieData.posterUrl}" class="card-img-top" alt="${movieData.title}">
            <div class="card-body">
                <h5 class="card-title">${movieData.title}</h5>
                <p class="card-text">Yönetmen: ${movieData.director}</p>
                <p class="card-text">Yıl: ${movieData.year}</p>
                <p class="card-text">Tür: ${movieData.genre}</p>
                <button class="btn btn-danger delete-btn">Sil</button>
                <button class="btn btn-warning update-btn">Güncelle</button>
            </div>
        `;

        movieCard.querySelector(".delete-btn").addEventListener("click", () => {
            deleteMovie(movieData.id);
            movieCard.remove();
        });

        movieCard.querySelector(".update-btn").addEventListener("click", () => {
            movieForm.title.value = movieData.title;
            movieForm.director.value = movieData.director;
            movieForm.year.value = movieData.year;
            movieForm.genre.value = movieData.genre;
            movieForm.posterUrl.value = movieData.posterUrl;

            movieForm.onsubmit = (event) => {
                event.preventDefault();
                updateMovie(movieData.id, {
                    id: movieData.id,
                    title: movieForm.title.value,
                    director: movieForm.director.value,
                    year: movieForm.year.value,
                    genre: movieForm.genre.value,
                    posterUrl: movieForm.posterUrl.value
                });
                movieForm.reset();
                movieForm.onsubmit = null;
            };
        });

        movieCollection.appendChild(movieCard);
    }

    function saveMovie(movieData) {
        const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
        storedMovies.push(movieData);
        localStorage.setItem("movies", JSON.stringify(storedMovies));
    }

    function deleteMovie(id) {
        const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
        const updatedMovies = storedMovies.filter(movie => movie.id !== id);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    }

    function updateMovie(id, updatedMovieData) {
        const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
        const updatedMovies = storedMovies.map(movie => movie.id === id ? updatedMovieData : movie);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));

        const movieCard = movieCollection.querySelector(`[data-movie-id="${id}"]`);
        movieCard.querySelector(".card-title").textContent = updatedMovieData.title;
                movieCard.querySelector(".card-img-top").src = updatedMovieData.posterUrl;
        movieCard.querySelector(".card-img-top").alt = updatedMovieData.title;
        movieCard.querySelector(".card-text:nth-child(2)").textContent = `Yönetmen: ${updatedMovieData.director}`;
        movieCard.querySelector(".card-text:nth-child(3)").textContent = `Yıl: ${updatedMovieData.year}`;
        movieCard.querySelector(".card-text:nth-child(4)").textContent = `Tür: ${updatedMovieData.genre}`;

        const updateBtn = movieCard.querySelector(".update-btn");
        updateBtn.removeEventListener("click", updateBtn.onclick);
        updateBtn.addEventListener("click", () => {
            movieForm.title.value = updatedMovieData.title;
            movieForm.director.value = updatedMovieData.director;
            movieForm.year.value = updatedMovieData.year;
            movieForm.genre.value = updatedMovieData.genre;
            movieForm.posterUrl.value = updatedMovieData.posterUrl;

            movieForm.onsubmit = (event) => {
                event.preventDefault();
                updateMovie(updatedMovieData.id, {
                    id: updatedMovieData.id,
                    title: movieForm.title.value,
                    director: movieForm.director.value,
                    year: movieForm.year.value,
                    genre: movieForm.genre.value,
                    posterUrl: movieForm.posterUrl.value
                });
                movieForm.reset();
                movieForm.onsubmit = null;
            };
        });
    }
});

        
