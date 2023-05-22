class Sorting {
  static main() {
    sortingCheckbox.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          sortingCheckbox.forEach((otherCheckbox) => {
            if (otherCheckbox !== this) {
              otherCheckbox.checked = false;
            }
          });
        } else {
          // Hiçbir checkbox seçilmediyse, varsayılan olarak birini seçili hale getir
          let isAnyCheckboxSelected = Array.from(sortingCheckbox).some((checkbox) => checkbox.checked);
          if (!isAnyCheckboxSelected) {
            // Varsayılan olarak ilk checkbox'i seçili hale getir
            sortingCheckbox[0].checked = true;
            shorthingType = "default"
            window.location.reload();
          }
        }
      });
    });
    sortingCheckbox.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          shorthingType = this.id;
          console.log(shorthingType);
          UI.addBlogToUI();
        }
      });
    });
  }



  static sortBlogs(blogs) {
    switch (shorthingType) {
      case "writer-a-z":
        return blogs.sort((a, b) => {
          if (a.writerName && b.writerName) {
            return a.writerName.localeCompare(b.writerName);
          }
          return 0;
        });
      case "writer-z-a":
        return blogs.sort((a, b) => {
          if (a.writerName && b.writerName) {
            return b.writerName.localeCompare(a.writerName);
          }
          return 0;
        });
      case "title-a-z":
        return blogs.sort((a, b) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
      case "title-z-a":
        return blogs.sort((a, b) => {
          if (a.title && b.title) {
            return b.title.localeCompare(a.title);
          }
          return 0;
        });
      case "oldest-date":
        return blogs.sort((a, b) => {
          if (a.date && b.date) {
            var datePartsA = a.date.split(" ");
            var datePartsB = b.date.split(" ");
            var dateA = datePartsA[0].split("/");
            var dateB = datePartsB[0].split("/");
            var formattedDateA = new Date(dateA[2], dateA[1] - 1, dateA[0]);
            var formattedDateB = new Date(dateB[2], dateB[1] - 1, dateB[0]);
            return formattedDateA - formattedDateB;
          }
          return 0;
        });
      case "latest-date":
        return blogs.sort((a, b) => {
          if (a.date && b.date) {
            var datePartsA = a.date.split(" ");
            var datePartsB = b.date.split(" ");
            var dateA = datePartsA[0].split("/");
            var dateB = datePartsB[0].split("/");
            var formattedDateA = new Date(dateA[2], dateA[1] - 1, dateA[0]);
            var formattedDateB = new Date(dateB[2], dateB[1] - 1, dateB[0]);
            return formattedDateB - formattedDateA;
          }
          return 0;
        });
      default:
        return blogs;

    }
  }


}

const sortingCheckbox = document.querySelectorAll('.sortingCheckbox');

let shorthingType = "default";

