let library = [];

// functions
    //constructor
function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
    //add
function addBookToLibrary(e) {
    e.preventDefault();
    const bookTitle = document.getElementById("title-input").value;  console.log("Title:"  + bookTitle);
    const bookAuthor = document.getElementById("author-input").value; console.log("Author:" + bookAuthor);
    const bookPages =  document.getElementById("pages-input").value;   console.log(bookPages);
    const newBook = new book(bookTitle, bookAuthor, bookPages);  console.log(newBook);
    if(document.getElementById("read-input").checked){ newBook.read = "Read";} else newBook.read = "Not read";
    library.push(newBook); console.log(library);
    document.getElementById("form").reset();
}


document.getElementById("add-button").addEventListener('click', addBookToLibrary);
    //deleteBook
    //deleteAllBooks
    //displayBooks
    //UpdateBookInfo
    //readStatus

