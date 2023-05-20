// import Fetch from "./fetch.js";
// import MusicCard from "./Components/musicCard.js";

// let filteredArrayMusics = [];
// class Filter {
//   static async filterMusicsFromFilter() {
//     const musicCategory = document.getElementById("musicCategory").value;
//     const musicWriter = document.getElementById("musicWriter").value;
//     const request = new Fetch("http://localhost:3000/posts");

//     const categoriesAndAuthors = document.querySelectorAll(
//       'input[name="categoriesandauthors"]:checked'
//     );
//     const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
//       (input) => input.value
//     );

//     // Müzikleri sorguya göre filtreleme
//     const musics = await request.get();
//     const filteredMusics = musics.filter((music) => {
//       if (musicCategory !== "" && music.category !== musicCategory) {
//         return false;
//       }
//       if (musicWriter !== "" && music.writer !== musicWriter) {
//         return false;
//       }
//       if (selectedCategoriesAndAuthors.length > 0) {
//         const musicCategoriesAndAuthors = [
//           music.category.replace(/ /g, "").toLowerCase(),
//           music.writer.replace(/ /g, "").toLowerCase(),
//         ];
//         const matchingCategoriesAndAuthors =
//           selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
//             musicCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
//           );
//         if (matchingCategoriesAndAuthors.length === 0) {
//           return false;
//         }
//       }
//       return true;
//     });

//     musicList.innerHTML = "";

//     console.log(filteredMusics);
//     // Filtrelenen müzikleri müzik listesine ekleyin
//     filteredMusics.forEach((music) => {
//       MusicCard.addMusicFromMusicCard(music);
//     });

//     filteredArrayMusics = filteredMusics;
//     console.log(filteredArrayMusics);
//     return filteredArrayMusics;
//   }

//   static async searchMusicFromFilter(query) {
//     const request = new Fetch("http://localhost:3000/posts");

//     // // Müzikleri sorguya göre filtreleme
//     // const musics = await request.get();
//     //
//     // filteredArrayMusics = await Filter.filterMusicsFromFilter();
//     console.log([...filteredArrayMusics]);

//     if(filteredArrayMusics.length === 0){
//       filteredArrayMusics = await request.get();
//     } else {
//       filteredArrayMusics = [...filteredArrayMusics];
//     }

//     const musics = [...filteredArrayMusics];
//     const filteredMusics = musics.filter(
//       (music) =>
//         music.name.toLowerCase().includes(query.toLowerCase()) ||
//         music.writer.toLowerCase().includes(query.toLowerCase())
//     );

//     musicList.innerHTML = "";

//     // Filtrelenen müzikleri müzik listesine ekleyin
//     filteredMusics.forEach((music) => {
//       MusicCard.addMusicFromMusicCard(music);
//     });
//   }

//   static async sortMusicsFromFilter(sortType) {
//     const request = new Fetch("http://localhost:3000/posts");

//     // // Müzikleri sorguya göre sıralama
//     // const musics = await request.get();
//     //
//     // filteredArrayMusics = await Filter.filterMusicsFromFilter();
//     console.log([...filteredArrayMusics]);

//     if(filteredArrayMusics.length === 0){
//       filteredArrayMusics = await request.get();
//     } else {
//       filteredArrayMusics = [...filteredArrayMusics];
//     }

//     const musics = [...filteredArrayMusics];
//     let sortedMusics = [];

//     switch (sortType) {
//       case "alphabetical-asc-title":
//         sortedMusics = musics.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       case "alphabetical-desc-title":
//         sortedMusics = musics.sort((a, b) => b.name.localeCompare(a.name));
//         break;
//       case "alphabetical-asc-writer":
//         sortedMusics = musics.sort((a, b) => a.writer.localeCompare(b.writer));
//         break;
//       case "alphabetical-desc-writer":
//         sortedMusics = musics.sort((a, b) => b.writer.localeCompare(a.writer));
//         break;
//       case "date-asc":
//         sortedMusics = musics.sort(
//           (a, b) => new Date(a.date) - new Date(b.date)
//         );
//         break;
//       case "date-desc":
//         sortedMusics = musics.sort(
//           (a, b) => new Date(b.date) - new Date(a.date)
//         );
//         break;
//       default:
//         sortedMusics = musics;
//         break;
//     }

//     musicList.innerHTML = "";

//     // Filtrelenen müzikleri müzik listesine ekleyin
//     sortedMusics.forEach((music) => {
//       MusicCard.addMusicFromMusicCard(music);
//     });
//   }
// }

// export default Filter;

import Fetch from "./fetch.js";
import MusicCard from "./Components/musicCard.js";

let filteredArrayMusics = [];

class Filter {
  static async filterMusicsFromFilter() {
    const musicCategory = document.getElementById("musicCategory").value;
    const musicWriter = document.getElementById("musicWriter").value;
    const request = new Fetch("http://localhost:3000/posts");

    const categoriesAndAuthors = document.querySelectorAll(
      'input[name="categoriesandauthors"]:checked'
    );
    const selectedCategoriesAndAuthors = Array.from(categoriesAndAuthors).map(
      (input) => input.value
    );

    // Müzikleri sorguya göre filtreleme
    const musics = await request.get();
    const filteredMusics = musics.filter((music) => {
      if (musicCategory !== "" && music.category !== musicCategory) {
        return false;
      }
      if (musicWriter !== "" && music.writer !== musicWriter) {
        return false;
      }
      if (selectedCategoriesAndAuthors.length > 0) {
        const musicCategoriesAndAuthors = [
          music.category.replace(/ /g, "").toLowerCase(),
          music.writer.replace(/ /g, "").toLowerCase(),
        ];
        const matchingCategoriesAndAuthors =
          selectedCategoriesAndAuthors.filter((selectedCategoryAndAuthor) =>
            musicCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
          );
        if (matchingCategoriesAndAuthors.length === 0) {
          return false;
        }
      }
      return true;
    });

    musicList.innerHTML = "";

    // Filtrelenen müzikleri müzik listesine ekleyin
    filteredMusics.forEach((music) => {
      MusicCard.addMusicFromMusicCard(music);
    });

    filteredArrayMusics = filteredMusics;
    return filteredArrayMusics;
  }

  static async searchMusicFromFilter(query) {
    const request = new Fetch("http://localhost:3000/posts");

    let musics;
    if (filteredArrayMusics.length === 0) {
      musics = await request.get();
    } else {
      musics = [...filteredArrayMusics];
    }

    const filteredMusics = musics.filter(
      (music) =>
        music.name.toLowerCase().includes(query.toLowerCase()) ||
        music.writer.toLowerCase().includes(query.toLowerCase())
    );

    musicList.innerHTML = "";

    // Filtrelenen müzikleri müzik listesine ekleyin
    filteredMusics.forEach((music) => {
      MusicCard.addMusicFromMusicCard(music);
    });
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
