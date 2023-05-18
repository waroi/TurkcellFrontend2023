import Music from "./Components/music.js";
import Fetch from "./fetch.js";

class UI {
  // static async formListenSubmitFromUI(e) {
  //   e.preventDefault();

  //   const id = Date.now();
  //   const musicName = document.getElementById("musicName").value.trim();
  //   const musicCategory = document.getElementById("musicCategory").value.trim();
  //   const musicDate = document.getElementById("musicDate").value.trim();
  //   const musicClock = document.getElementById("musicClock").value.trim();
  //   const musicWriter = document.getElementById("musicWriter").value.trim();
  //   const musicTextContent = document
  //     .getElementById("musicTextContent")
  //     .value.trim();
  //   const ImageUrl = document.getElementById("imgUrl").value.trim();
  //   const button = document.getElementById("addOrEditButton");
  //   const title = document.getElementById("booksModalLabel");
  //   // const sort = document.getElementById("sort");
  //   const request = new Fetch("http://localhost:3000/posts");

  //   if (
  //     musicName === "" ||
  //     musicCategory === "" ||
  //     musicDate === "" ||
  //     musicClock === "" ||
  //     musicWriter === "" ||
  //     musicTextContent === "" ||
  //     ImageUrl === ""
  //   ) {
  //     alert("Lütfen tüm alanları doldurunuz.");
  //     return;
  //   }

  //   if (button.innerHTML === "Düzenle") {
  //     const musicEditId = button.dataset.editMusicId;
  //     const music = new Music(
  //       musicEditId,
  //       ImageUrl,
  //       musicName,
  //       musicCategory,
  //       musicDate,
  //       musicWriter,
  //       musicClock,
  //       musicTextContent
  //     );
  //     // Filter.sortBooksFromFilter(sort.value);
  //     await request.put(musicEditId, music);

  //     // butonu düzenle
  //     button.innerHTML = "Ekle";
  //     button.className = "btn btn-success w-25";
  //     delete button.dataset.editBookId;

  //     // title düzenle
  //     title.innerHTML = "Müzik Ekle";
  //   } else {
  //     const music = new Music(
  //       id,
  //       ImageUrl,
  //       musicName,
  //       musicWriter,
  //       musicTextContent,
  //       musicCategory,
  //       musicDate,
  //       musicClock
  //     );
  //     // Filter.sortBooksFromFilter(sort.value);
  //     request
  //       .post(music)
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .cath((err) => {
  //         console.log(err);
  //       });
  //   }
  //   e.preventDefault();
  // }
  static async formListenSubmitFromUI(e) {
    e.preventDefault();

    const id = Date.now();
    const musicName = document.getElementById("musicName").value.trim();
    const musicCategory = document.getElementById("musicCategory").value.trim();
    const musicDate = document.getElementById("musicDate").value.trim();
    const musicClock = document.getElementById("musicClock").value.trim();
    const musicWriter = document.getElementById("musicWriter").value.trim();
    const musicTextContent = document
      .getElementById("musicTextContent")
      .value.trim();
    const ImageUrl = document.getElementById("imgUrl").value.trim();
    const button = document.getElementById("addOrEditButton");
    const title = document.getElementById("booksModalLabel");
    const request = new Fetch("http://localhost:3000/posts");

    if (
      musicName === "" ||
      musicCategory === "" ||
      musicDate === "" ||
      musicClock === "" ||
      musicWriter === "" ||
      musicTextContent === "" ||
      ImageUrl === ""
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if (button.innerHTML === "Düzenle") {
      const musicEditId = button.dataset.editMusicId;
      const music = new Music(
        musicEditId,
        ImageUrl,
        musicName,
        musicCategory,
        musicDate,
        musicWriter,
        musicClock,
        musicTextContent
      );

      await request
        .put(musicEditId, music)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      // Butonu düzenle
      button.innerHTML = "Ekle";
      button.className = "btn btn-success w-25";
      delete button.dataset.editMusicId;

      // Başlık düzenle
      title.innerHTML = "Müzik Ekle";
    } else {
      const music = new Music(
        id,
        ImageUrl,
        musicName,
        musicCategory,
        musicDate,
        musicWriter,
        musicClock,
        musicTextContent
      );

      await request
        .post(music)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  static editBookFromUI(e) {
    if (e.target.classList.contains("fa-pen-to-square")) {
      const music = e.target.closest(".col-lg-3");
      const musicChangeId = music.id;
      const request = new Fetch("http://localhost:3000/posts");

      const musicName = document.getElementById("musicName");
      const musicCategory = document.getElementById("musicCategory");
      const musicDate = document.getElementById("musicDate");
      const musicClock = document.getElementById("musicClock");
      const musicWriter = document.getElementById("musicWriter");
      const musicTextContent = document.getElementById("musicTextContent");
      const imageUrl = document.getElementById("imgUrl");
      const button = document.getElementById("addOrEditButton");
      const title = document.getElementById("musicModalLabel");

      request.get().then((data) => {
        const musicToEdit = data.find((music) => music.id == musicChangeId);

        if (musicToEdit) {
          musicName.value = musicToEdit.name;
          musicCategory.value = musicToEdit.category;
          musicDate.value = musicToEdit.date;
          musicClock.value = musicToEdit.clock;
          musicWriter.value = musicToEdit.writer;
          musicTextContent.value = musicToEdit.textContent;
          imageUrl.value = musicToEdit.imageUrl;

          button.innerHTML = "Düzenle";
          button.className = "btn btn-warning w-25";
          button.dataset.editMusicId = musicToEdit.id;

          title.innerHTML = "Müzik Düzenle";
        }
      });
    }
  }

  static deleteBookFromUI(e) {
    if (e.target.classList.contains("fa-trash")) {
      const music = e.target.closest(".col-lg-3");
      const musicId = music.id;
      const request = new Fetch("http://localhost:3000/posts");

      request
        .delete(musicId)
        .then((response) => {
          console.log(response); // İsteğin yanıtını kontrol etmek için kullanılabilir
          music.remove(); // Müzik elementini DOM'dan kaldır
        })
        .catch((error) => {
          console.log(error); // Hata durumunda hata mesajını kontrol etmek için kullanılabilir
        });
    }
    e.preventDefault();
  }
}

export default UI;
