const gridContainer = document.querySelector('.grid-container');
const newBookBtn = document.querySelector('.new-book');
const dialog = document.querySelector("[data-modal]");

const myLibrary = [];

function Book(book_id, title, author, pages, status, cover_img) {
    this.book_id = book_id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover_img = cover_img;
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

    const statusBtn = document.createElement('img');
    statusBtn.classList.add('status-button');
    statusBtn.setAttribute("src", "resources/book-open-page-variant-outline.svg");

    const deleteBtn = document.createElement('img');
    deleteBtn.classList.add('delete-button');
    deleteBtn.setAttribute("src", "resources/delete-outline.svg");


    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(actions);
    actions.appendChild(statusBtn);
    actions.appendChild(deleteBtn);
    gridContainer.appendChild(card);
}

function addToDisplay() {
    myLibrary.forEach((book) => {
        displayBook(book);
    });
}

function newBook() {
    newBookBtn.addEventListener('click', ()=> {
        dialog.showModal();
    });
}




addToDisplay();
newBook();



