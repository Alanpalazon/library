let library = [];

function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

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

// function styleBooks(){}

     //displayBooks
// function displayBooks(){
//     for(let i = 0; i<library.length; i++){/*call style function here*/}
// }

    //deleteBook
// function deleteBook(){
//     //give all books and their delete icons the same  class (book title)
//     //when delete icon clicked delete book that has the same class as the clicked icon 
// }


function deleteAll(){
    library = [];
    const gridContainer = document.getElementById("grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

}
    //UpdateBookInfo
    //readStatus

    document.getElementById("add-button").addEventListener('click', addBookToLibrary);
    document.getElementById("delete-button").addEventListener('click', deleteAll);