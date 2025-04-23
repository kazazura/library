const gridContainer = document.querySelector('.grid-container');
const newBookBtn = document.querySelector('.new-book');
const dialog = document.querySelector('[data-modal]');
const closeBtn = document.querySelector('.close-button');

const myLibrary = [];

function Book(book_id, title, author, pages, status, cover_img) {
    this.book_id = book_id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover_img = cover_img;
}

Book.prototype.changeStatus = function () {
    if(this.status === 'Read') {
        this.status = 'Unread';
    } else {
        this.status = 'Read';
    }
}

function addBookToLibrary(title, author, pages, status, cover_img) {
    const book_id = crypto.randomUUID();
    const newBook = new Book(book_id, title, author, pages, status, cover_img);
    myLibrary.push(newBook);
}

addBookToLibrary('Bakemonogatari, Part 1', 'Nisio Isin', '240 pages', 'Read', 'url(images/Bake1eng.webp)');
addBookToLibrary('Bakemonogatari, Part 2', 'Nisio Isin', '330 pages', 'Read', 'url(images/Bake2eng.webp');
addBookToLibrary('Bakemonogatari, Part 3', 'Nisio Isin', '226 pages', 'Read', 'url(images/Bake3eng.webp)');
addBookToLibrary('Kizumonogatari', 'Nisio Isin', '354 pages', 'Read', 'url(images/Kizumonogatari.webp)');
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', '96 pages', 'Read', 'url(images/157993.jpg)');
addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkien', '1077 pages', 'Read', 'url(images/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif)');

myLibrary.forEach((book) => {
    console.log(book);
});

function displayBook(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = book.cover_img;

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.classList.add('author');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.textContent = book.pages;

    const status = document.createElement('p');
    status.classList.add('status');
    status.textContent = book.status;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const statusBtnImg = document.createElement('img');
    statusBtnImg.classList.add('status-button-img');
    statusBtnImg.setAttribute("src", "resources/book-open-page-variant-outline.svg");

    const deleteBtnImg = document.createElement('img');
    deleteBtnImg.classList.add('delete-button-img');
    deleteBtnImg.setAttribute("src", "resources/delete-outline.svg");

    const statusBtn = document.createElement('button');
    statusBtn.classList.add('delete-button');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(actions);
    statusBtn.appendChild(statusBtnImg);
    deleteBtn.appendChild(deleteBtnImg);
    actions.appendChild(statusBtn);
    actions.appendChild(deleteBtn);
    gridContainer.appendChild(card);

    function bookControls() {
        deleteBtn.addEventListener('click', () => {
            console.log("Hello");
        });

        statusBtn.addEventListener('click', ()=> {
            if(book.status === 'Read') {
                status.textContent = book.status;
            } else if (book.status === 'Unread') {
                status.textContent = book.status;
            }
            book.changeStatus();
        });
    }
    bookControls();
}

function addToDisplay() {
    myLibrary.forEach((book) => {
        displayBook(book);
    });
}

function newBook() {
    newBookBtn.addEventListener('click', () => {
        dialog.showModal();
    });
}

function closeModal() {
    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}

addToDisplay();
newBook();

//fix status



