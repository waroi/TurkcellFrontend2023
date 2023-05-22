function UI() { }

UI.prototype.addBookToUI = function (newBook) {
    const bookList = document.getElementById('books');

    // create book item in book list as table row
    const bookItem = document.createElement('tr');
    bookItem.id = `Book-${newBook.id}`;

    // create preview button
    const previewButton = document.createElement('a');
    previewButton.href = '#';
    previewButton.id = 'preview-book';
    previewButton.className = 'btn btn-outline-primary';
    previewButton.innerHTML = '<i class="fas fa-eye"></i>';

    // add event listener to preview button
    previewButton.addEventListener('click', previewBook);

    bookItem.innerHTML = `
    <td><a href="#" id="preview-book" class="btn btn-outline-primary"><i class="fas fa-eye"></i></a></td>
    <td>${newBook.id}</td>
    <td>${newBook.name}</td>
    <td>${newBook.author}</td>
    <td>${newBook.category}</td>
    <td>${newBook.date}</td>
    <td><a href="#" id="edit-book" class="btn btn-success m-1"  data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Book</a><a href="#" id="delete-book" class="btn btn-danger ">Delete Book</a></td>
    `;



    // add event listener to delete book
    bookItem.addEventListener('click', deleteBook);
    // add event listener to preview book
    bookItem.addEventListener('click', previewBook);
    // add event listener to edit book
    bookItem.addEventListener('click', editBook);


    // add book item to start from book list
    bookList.insertBefore(bookItem, bookList.firstElementChild);

}

UI.prototype.fillInputs = function (book) {

    modalBookName.value = book.name;
    modalBookAuthor.value = book.author;
    modalBookCategory.value = book.category;
    modalBookDate.value = book.date;
    modalBookCoverPageUrl.value = book.coverPageUrl;

    modalSaveChanges.setAttribute('data-id', book.id);

}

UI.prototype.editBookInUI = function (updatedBook) {
    const bookItem = document.getElementById(`Book-${updatedBook.id}`);
    bookItem.innerHTML = `
    <td><a href="#" id="preview-book" class="btn btn-outline-primary"><i class="fas fa-eye"></i></a></td>
    <td>${updatedBook.id}</td>
    <td>${updatedBook.name}</td>
    <td>${updatedBook.author}</td>
    <td>${updatedBook.category}</td>
    <td>${updatedBook.date}</td>
    <td><a href="#" id="edit-book" class="btn btn-success m-1"  data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Book</a><a href="#" id="delete-book" class="btn btn-danger ">Delete Book</a></td>
    `;
    // add event listener to delete book
    bookItem.addEventListener('click', deleteBook);
    // add event listener to preview book
    bookItem.addEventListener('click', previewBook);
    // add event listener to edit book
    bookItem.addEventListener('click', editBook);

}

UI.prototype.sortBooksByID = function () {
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    const bookItemsArray = Array.from(bookItems);

    // if books are sorted ascending by ID, sort them descending
    if (bookItemsArray[0].getElementsByTagName('td')[1].textContent > bookItemsArray[1].getElementsByTagName('td')[1].textContent) {
        bookItemsArray.sort(function (bookItem1, bookItem2) {
            const bookItem1ID = bookItem1.getElementsByTagName('td')[1].textContent;
            const bookItem2ID = bookItem2.getElementsByTagName('td')[1].textContent;
            return bookItem1ID - bookItem2ID;
        });
        bookList.innerHTML = '';
        bookItemsArray.map(function (bookItem) {
            bookList.appendChild(bookItem);
        });
        return;
    }

    bookItemsArray.sort(function (bookItem1, bookItem2) {
        const bookItem1ID = bookItem1.getElementsByTagName('td')[1].textContent;
        const bookItem2ID = bookItem2.getElementsByTagName('td')[1].textContent;
        return bookItem2ID - bookItem1ID;
    });
    bookList.innerHTML = '';
    bookItemsArray.map(function (bookItem) {
        bookList.appendChild(bookItem);
    });

}

UI.prototype.sortBooksByName = function () {
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    const bookItemsArray = Array.from(bookItems);

    // if books are sorted ascending by name, sort them descending
    if (bookItemsArray[0].getElementsByTagName('td')[2].textContent > bookItemsArray[1].getElementsByTagName('td')[2].textContent) {
        bookItemsArray.sort(function (bookItem1, bookItem2) {
            const bookItem1Name = bookItem1.getElementsByTagName('td')[2].textContent;
            const bookItem2Name = bookItem2.getElementsByTagName('td')[2].textContent;
            if (bookItem1Name < bookItem2Name) {
                return -1;
            }
            if (bookItem1Name > bookItem2Name) {
                return 1;
            }
            return 0;
        });
        bookList.innerHTML = '';
        bookItemsArray.map(function (bookItem) {
            bookList.appendChild(bookItem);
        });
        return;
    }

    bookItemsArray.sort(function (bookItem1, bookItem2) {
        const bookItem1Name = bookItem1.getElementsByTagName('td')[2].textContent;
        const bookItem2Name = bookItem2.getElementsByTagName('td')[2].textContent;

        if (bookItem1Name < bookItem2Name) {
            return 1;
        }
        if (bookItem1Name > bookItem2Name) {
            return -1;
        }
        return 0;
    }
    );
    bookList.innerHTML = '';
    bookItemsArray.map(function (bookItem) {
        bookList.appendChild(bookItem);
    }
    );
}

UI.prototype.sortBooksByAuthor = function () {
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    const bookItemsArray = Array.from(bookItems);

    // if books are sorted ascending by author, sort them descending
    if (bookItemsArray[0].getElementsByTagName('td')[3].textContent > bookItemsArray[1].getElementsByTagName('td')[3].textContent) {
        bookItemsArray.sort(function (bookItem1, bookItem2) {
            const bookItem1Author = bookItem1.getElementsByTagName('td')[3].textContent;
            const bookItem2Author = bookItem2.getElementsByTagName('td')[3].textContent;
            if (bookItem1Author < bookItem2Author) {
                return -1;
            }
            if (bookItem1Author > bookItem2Author) {
                return 1;
            }
            return 0;
        });
        bookList.innerHTML = '';
        bookItemsArray.map(function (bookItem) {
            bookList.appendChild(bookItem);
        });
        return;
    }

    bookItemsArray.sort(function (bookItem1, bookItem2) {
        const bookItem1Author = bookItem1.getElementsByTagName('td')[3].textContent;
        const bookItem2Author = bookItem2.getElementsByTagName('td')[3].textContent;

        if (bookItem1Author < bookItem2Author) {
            return 1;
        }
        if (bookItem1Author > bookItem2Author) {
            return -1;
        }
        return 0;
    }

    );
    bookList.innerHTML = '';
    bookItemsArray.map(function (bookItem) {
        bookList.appendChild(bookItem);
    }

    );
}

UI.prototype.sortBooksByCategory = function () {
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    const bookItemsArray = Array.from(bookItems);

    // if books are sorted ascending by category, sort them descending
    if (bookItemsArray[0].getElementsByTagName('td')[4].textContent > bookItemsArray[1].getElementsByTagName('td')[4].textContent) {
        bookItemsArray.sort(function (bookItem1, bookItem2) {
            const bookItem1Category = bookItem1.getElementsByTagName('td')[4].textContent;
            const bookItem2Category = bookItem2.getElementsByTagName('td')[4].textContent;
            if (bookItem1Category < bookItem2Category) {
                return -1;
            }
            if (bookItem1Category > bookItem2Category) {
                return 1;
            }
            return 0;
        });
        bookList.innerHTML = '';
        bookItemsArray.map(function (bookItem) {
            bookList.appendChild(bookItem);
        });
        return;
    }

    bookItemsArray.sort(function (bookItem1, bookItem2) {
        const bookItem1Category = bookItem1.getElementsByTagName('td')[4].textContent;
        const bookItem2Category = bookItem2.getElementsByTagName('td')[4].textContent;

        if (bookItem1Category < bookItem2Category) {
            return 1;
        }
        if (bookItem1Category > bookItem2Category) {
            return -1;
        }
        return 0;
    }

    );
    bookList.innerHTML = '';
    bookItemsArray.map(function (bookItem) {
        bookList.appendChild(bookItem);
    }

    );
}

UI.prototype.sortBooksByDate = function () {
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    const bookItemsArray = Array.from(bookItems);

    // if books are sorted ascending by date, sort them descending
    if (bookItemsArray[0].getElementsByTagName('td')[5].textContent > bookItemsArray[1].getElementsByTagName('td')[5].textContent) {
        bookItemsArray.sort(function (bookItem1, bookItem2) {
            const bookItem1Date = bookItem1.getElementsByTagName('td')[5].textContent;
            const bookItem2Date = bookItem2.getElementsByTagName('td')[5].textContent;
            if (bookItem1Date < bookItem2Date) {
                return -1;
            }
            if (bookItem1Date > bookItem2Date) {
                return 1;
            }
            return 0;
        });
        bookList.innerHTML = '';
        bookItemsArray.map(function (bookItem) {
            bookList.appendChild(bookItem);
        });
        return;
    }

    bookItemsArray.sort(function (bookItem1, bookItem2) {
        const bookItem1Date = bookItem1.getElementsByTagName('td')[5].textContent;
        const bookItem2Date = bookItem2.getElementsByTagName('td')[5].textContent;

        if (bookItem1Date < bookItem2Date) {
            return 1;
        }
        if (bookItem1Date > bookItem2Date) {
            return -1;
        }
        return 0;

    }

    );
    bookList.innerHTML = '';
    bookItemsArray.map(function (bookItem) {
        bookList.appendChild(bookItem);
    }

    );
}

UI.prototype.deleteBookFromUI = function (target) {
    target.remove();
}

UI.prototype.clearInputs = function () {
    bookName.value = '';
    bookAuthor.value = '';
    bookCategory.value = '';
    bookDate.value = '';
    bookCoverPageUrl.value = '';

    modalBookName.value = '';
    modalBookAuthor.value = '';
    modalBookCategory.value = '';
    modalBookDate.value = '';
    modalBookCoverPageUrl.value = '';

}

UI.prototype.clearAllBooksFromUI = function () {
    const bookList = document.getElementById('books');
    while (bookList.firstElementChild !== null) {
        bookList.firstElementChild.remove();
    }
}

UI.prototype.filterBooks = function (authorValue, categoryValue) {
    authorValue = authorValue.toLowerCase();
    categoryValue = categoryValue.toLowerCase();
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    Array.from(bookItems).map(function (bookItem) {
        const bookItemText = bookItem.textContent.trim().toLowerCase().split('edit book')[0];
        const author = bookItemText.split('\n')[2].trim().toLowerCase();
        const category = bookItemText.split('\n')[3].trim().toLowerCase();

        if (author !== authorValue && authorValue !== 'all' || category !== categoryValue && categoryValue !== 'all') {
            bookItem.style.display = 'none';
        }
        else {
            bookItem.style.display = 'table-row';
        }
    }
    );

    // if no books are displayed, display a alert message
    const bookItemsArray = Array.from(bookItems);
    const bookItemsDisplayed = bookItemsArray.some(bookItem => bookItem.style.display === 'table-row');

    if (!bookItemsDisplayed) {
      this.showAlert( 'danger','No books found');
    }

}

UI.prototype.searchBooks = function (e) {
    const filterValue = e.target.value.trim().toLowerCase();
    const bookList = document.getElementById('books');
    const bookItems = bookList.getElementsByTagName('tr');
    Array.from(bookItems).map(function (bookItem) {
        const bookItemText = bookItem.textContent.trim().toLowerCase().split('edit book')[0];
        if (bookItemText.indexOf(filterValue) === -1) {
            bookItem.style.display = 'none';
        }
        else {
            bookItem.style.display = 'table-row';
        }
    }
    );


}

UI.prototype.toggleForm = function () {
    bookForm.hidden = !bookForm.hidden;
    if (bookForm.hidden) {
        bookForm.classList.remove('active');
    }
    else {
        bookForm.classList.add('active');
    }
}

UI.prototype.showAlert = function (type, message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';

    const alert = document.createElement('div');
    // set size of alert container
    alertContainer.style.width = '400px';
    alertContainer.style.height = '200px';
    alert.className = `alert alert-${type}`;
    // center text in alert container
    alert.style.display = 'flex';
    alert.style.justifyContent = 'center';
    alert.style.alignItems = 'center';
    alert.textContent = message;

    alertContainer.appendChild(alert);
    document.body.appendChild(alertContainer);

    setTimeout(function () {
        alertContainer.remove();
    }, 4000);
}

