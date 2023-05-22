import Fetch from "./fetch.js";
import MusicCard from "./Components/musicCard.js";

let filteredArrayMusics = [];

class Filter {
  // static async filterMusicsFromFilter() {
  //   const musicCategory = document.getElementById("musicCategory").value;
  //   const musicWriter = document.getElementById("musicWriter").value;
  //   const request = new Fetch("http://localhost:3000/posts");
  //   const sortOptions = document.getElementsByName("sort-option");

  //   const categoriesAndAuthors = document.querySelectorAll(
  //     'input[name="categoriesandauthors"]:checked'
  //   );
  //   const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
  //     (input) => input.value
  //   );

  //   // Müzikleri sorguya göre filtreleme
  //   const musics = await request.get();
  //   let filteredMusics = musics.filter((music) => {
  //     if (musicCategory && music.category !== musicCategory) {
  //       return false;
  //     }
  //     if (
  //       musicWriter &&
  //       music.writer.toLowerCase() !== musicWriter.toLowerCase()
  //     ) {
  //       return false;
  //     }
  //     if (selectedCategoriesAndAuthors.length > 0) {
  //       const musicCategoriesAndAuthors = [
  //         music.category.replace(/ /g, "").toLowerCase(),
  //         music.writer.replace(/ /g, "").toLowerCase(),
  //       ];
  //       const matchingCategoriesAndAuthors =
  //         selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
  //           musicCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
  //         );
  //       console.log(musicCategoriesAndAuthors);
  //       if (matchingCategoriesAndAuthors.length === 0) {
  //         return false;
  //       }
  //     } else {
  //       filteredArrayMusics = [...musics];
  //     }
  //     return true;
  //   });

  //   musicList.innerHTML = "";

  //   // Filtrelenen müzikleri müzik listesine ekleyin
  //   filteredMusics.forEach((music) => {
  //     MusicCard.addMusicFromMusicCard(music);
  //   });

  //   filteredArrayMusics = filteredMusics;

  //   let selectedSortOption;

  //   for (const option of sortOptions) {
  //     if (option.checked) {
  //       selectedSortOption = option.value;
  //       break;
  //     }
  //   }

  //   if (!selectedSortOption) {
  //     console.error("Sort seçeneği belirtilmedi.");
  //     return;
  //   }
  //   this.sortMusicsFromFilter(selectedSortOption);

  //   return filteredArrayMusics;
  // }

  // static async searchMusicFromFilter(query) {
  //   const request = new Fetch("http://localhost:3000/posts");

  //   const musics = await request.get();

  //   const filteredMusics = musics.filter(
  //     (music) =>
  //       music.name.toLowerCase().includes(query.toLowerCase()) ||
  //       music.writer.toLowerCase().includes(query.toLowerCase())
  //   );

  //   const categoriesAndAuthors = document.querySelectorAll(
  //     'input[name="categoriesandauthors"]:checked'
  //   );
  //   const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
  //     (input) => input.value
  //   );

  //   let filteredMusicsWithCategoriesAndAuthors = [];

  //   if (selectedCategoriesAndAuthors.length > 0) {
  //     filteredMusicsWithCategoriesAndAuthors = filteredMusics.filter(
  //       (music) => {
  //         const musicCategoriesAndAuthors = [
  //           music.category.replace(/ /g, "").toLowerCase(),
  //           music.writer.replace(/ /g, "").toLowerCase(),
  //         ];
  //         const matchingCategoriesAndAuthors =
  //           selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
  //             musicCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
  //           );
  //         return matchingCategoriesAndAuthors.length > 0;
  //       }
  //     );
  //   } else {
  //     filteredMusicsWithCategoriesAndAuthors = [...filteredMusics];
  //   }

  //   const sortOptions = document.getElementsByName("sort-option");
  //   let selectedSortOption;

  //   for (const option of sortOptions) {
  //     if (option.checked) {
  //       selectedSortOption = option.value;
  //       break;
  //     }
  //   }

  //   musicList.innerHTML = "";

  //   filteredMusicsWithCategoriesAndAuthors.forEach((music) => {
  //     MusicCard.addMusicFromMusicCard(music);
  //   });

  //   filteredArrayMusics = filteredMusicsWithCategoriesAndAuthors;
  //   this.sortMusicsFromFilter(selectedSortOption);
  // }

  static async filterMusicsFromFilter() {
    const musicCategory = document.getElementById("musicCategory").value;
    const musicWriter = document.getElementById("musicWriter").value;
    const request = new Fetch("http://localhost:3000/posts");
    const sortOptions = document.getElementsByName("sort-option");

    const categoriesAndAuthors = document.querySelectorAll(
      'input[name="categoriesandauthors"]:checked'
    );
    const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
      (input) => input.value
    );

    const musics = await request.get();
    let filteredMusics = musics;

    if (
      musicCategory ||
      musicWriter ||
      selectedCategoriesAndAuthors.length > 0
    ) {
      filteredMusics = musics.filter((music) => {
        const categoryMatch =
          !musicCategory || music.category === musicCategory;
        const writerMatch =
          !musicWriter ||
          music.writer.toLowerCase() === musicWriter.toLowerCase();
        const categoriesAndAuthorsMatch =
          selectedCategoriesAndAuthors.length === 0 ||
          selectedCategoriesAndAuthors.some((selected) =>
            [music.category, music.writer]
              .map((item) => item.replace(/ /g, "").toLowerCase())
              .includes(selected)
          );

        return categoryMatch && writerMatch && categoriesAndAuthorsMatch;
      });
    }

    musicList.innerHTML = "";
    filteredMusics.forEach((music) => {
      MusicCard.addMusicFromMusicCard(music);
    });

    filteredArrayMusics = filteredMusics;

    let selectedSortOption;
    for (const option of sortOptions) {
      if (option.checked) {
        selectedSortOption = option.value;
        break;
      }
    }

    if (!selectedSortOption) {
      console.error("Sort seçeneği belirtilmedi.");
      return;
    }

    this.sortMusicsFromFilter(selectedSortOption);

    return filteredArrayMusics;
  }

  static async searchMusicFromFilter(query) {
    const request = new Fetch("http://localhost:3000/posts");
    const sortOptions = document.getElementsByName("sort-option");

    const musics = await request.get();
    const filteredMusics = musics.filter(
      (music) =>
        music.name.toLowerCase().includes(query.toLowerCase()) ||
        music.writer.toLowerCase().includes(query.toLowerCase())
    );

    const categoriesAndAuthors = document.querySelectorAll(
      'input[name="categoriesandauthors"]:checked'
    );
    const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
      (input) => input.value
    );

    let filteredMusicsWithCategoriesAndAuthors = [];

    if (selectedCategoriesAndAuthors.length > 0) {
      filteredMusicsWithCategoriesAndAuthors = filteredMusics.filter(
        (music) => {
          const musicCategoriesAndAuthors = [
            music.category.replace(/ /g, "").toLowerCase(),
            music.writer.replace(/ /g, "").toLowerCase(),
          ];
          const matchingCategoriesAndAuthors =
            selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
              musicCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
            );
          return matchingCategoriesAndAuthors.length > 0;
        }
      );
    } else {
      filteredMusicsWithCategoriesAndAuthors = [...filteredMusics];
    }

    musicList.innerHTML = "";

    filteredMusicsWithCategoriesAndAuthors.forEach((music) => {
      MusicCard.addMusicFromMusicCard(music);
    });

    filteredArrayMusics = filteredMusicsWithCategoriesAndAuthors;

    let selectedSortOption;

    for (const option of sortOptions) {
      if (option.checked) {
        selectedSortOption = option.value;
        break;
      }
    }

    if (!selectedSortOption) {
      console.error("Sort seçeneği belirtilmedi.");
      return;
    }

    this.sortMusicsFromFilter(selectedSortOption);
  }

  static async sortMusicsFromFilter(sortType) {
    const request = new Fetch("http://localhost:3000/posts");

    let musics;
    if (filteredArrayMusics.length === 0) {
      musics = await request.get();
    } else {
      musics = [...filteredArrayMusics];
    }

    let sortedMusics = [];

    switch (sortType) {
      case "alphabetical-asc-title":
        sortedMusics = musics.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabetical-desc-title":
        sortedMusics = musics.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "alphabetical-asc-writer":
        sortedMusics = musics.sort((a, b) => a.writer.localeCompare(b.writer));
        break;
      case "alphabetical-desc-writer":
        sortedMusics = musics.sort((a, b) => b.writer.localeCompare(a.writer));
        break;
      case "date-asc":
        sortedMusics = musics.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        break;
      case "date-desc":
        sortedMusics = musics.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      default:
        sortedMusics = musics;
        break;
    }

    musicList.innerHTML = "";

    // Sıralanan müzikleri müzik listesine ekleyin
    sortedMusics.forEach((music) => {
      MusicCard.addMusicFromMusicCard(music);
    });
  }
}

export default Filter;

// static async searchMusicFromFilter(query) {
//   const request = new Fetch("http://localhost:3000/posts");

//   const musics = await request.get();

//   const filteredMusics = musics.filter(
//     (music) =>
//       music.name.toLowerCase().includes(query.toLowerCase()) ||
//       music.writer.toLowerCase().includes(query.toLowerCase())
//   );

//   const categoriesAndAuthors = document.querySelectorAll(
//     'input[name="categoriesandauthors"]:checked'
//   );
//   const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
//     (input) => input.value
//   );

//   let filteredMusicsWithCategoriesAndAuthors = [];

//   if (selectedCategoriesAndAuthors.length > 0) {
//     filteredMusicsWithCategoriesAndAuthors = filteredMusics.filter(
//       (music) => {
//         const musicCategoriesAndAuthors = [
//           music.category.replace(/ /g, "").toLowerCase(),
//           music.writer.replace(/ /g, "").toLowerCase(),
//         ];
//         const matchingCategoriesAndAuthors =
//           selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
//             musicCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
//           );
//         return matchingCategoriesAndAuthors.length > 0;
//       }
//     );
//   } else {
//     filteredMusicsWithCategoriesAndAuthors = [...filteredMusics];
//   }

//   const sortOptions = document.getElementsByName("sort-option");
//   let selectedSortOption;

//   for (const option of sortOptions) {
//     if (option.checked) {
//       selectedSortOption = option.value;
//       break;
//     }
//   }

//   musicList.innerHTML = "";

//   filteredMusicsWithCategoriesAndAuthors.forEach((music) => {
//     MusicCard.addMusicFromMusicCard(music);
//   });

//   filteredArrayMusics = filteredMusicsWithCategoriesAndAuthors;
//   this.sortMusicsFromFilter(selectedSortOption);
// }
