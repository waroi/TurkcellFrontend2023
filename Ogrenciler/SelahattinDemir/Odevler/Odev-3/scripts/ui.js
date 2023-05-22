import Music from "./Components/music.js";
import Fetch from "./fetch.js";
import Filter from "./filter.js";

class UI {
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
    const title = document.getElementById("offcanvasLeftLabel");
    const sortOptions = document.getElementsByName("sort-option");
    const toastContainer = document.getElementById("toastContainer");
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
      // Hata mesajı için Toast oluşturma
      const errorToast = document.createElement("div");
      errorToast.classList.add("toast");
      errorToast.setAttribute("role", "alert");
      errorToast.setAttribute("aria-live", "assertive");
      errorToast.setAttribute("aria-atomic", "true");

      const errorToastBody = document.createElement("div");
      errorToastBody.classList.add("toast-body");
      errorToastBody.textContent = "Lütfen tüm alanları doldurunuz.";

      errorToast.appendChild(errorToastBody);

      // Toast bileşenini Toast Container'a ekleyin
      toastContainer.appendChild(errorToast);

      // Bootstrap Toast'u gösterme
      const bootstrapToast = new bootstrap.Toast(errorToast);
      bootstrapToast.show();
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
        musicTextContent,
        musicClock
      );
      await request.put(musicEditId, music);
      showMusics();
      let selectedSortOption;

      for (const option of sortOptions) {
        if (option.checked) {
          selectedSortOption = option.value;
          break;
        }
      }
      Filter.sortMusicsFromFilter(selectedSortOption);

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
        musicTextContent,
        musicClock
      );
      await request.post(music);
      let selectedSortOption;

      for (const option of sortOptions) {
        if (option.checked) {
          selectedSortOption = option.value;
          break;
        }
      }
      Filter.sortMusicsFromFilter(selectedSortOption);
    }
  }
  static async editMusicFromUI(e) {
    e.preventDefault();
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
      const title = document.getElementById("offcanvasLeftLabel");

      await request.get().then((data) => {
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

  static async deleteMusicFromUI(e) {
    if (e.target.classList.contains("fa-trash")) {
      const music = e.target.closest(".col-lg-3");
      const musicId = music.id;
      const request = new Fetch("http://localhost:3000/posts");

      await request
        .delete(musicId)
        .then((response) => {
          console.log(response);
          music.remove(); // Müzik elementini DOM'dan kaldır
        })
        .catch((error) => {
          console.log(error);
        });
    }
    showMusics();
    e.preventDefault();
  }
}

export default UI;
