let library = [];

function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(e) {
    e.preventDefault();
    const bookTitle = document.getElementById("title-input").value; 
    const bookAuthor = document.getElementById("author-input").value; 
    const bookPages =  document.getElementById("pages-input").value;   
    const newBook = new book(bookTitle, bookAuthor, bookPages);  
    if(document.getElementById("read-input").checked){ newBook.read = "Read";} else newBook.read = "Not read";
    library.push(newBook); console.log(library);
    document.getElementById("form").reset();
    displayBooks();
}

//fix non-clickable eitable conent when empty 
//clean up html by removing unnecessary divs 

function displayBooks(){
    const gridContainer = document.getElementById("grid-container");
    for(let i = 0; i<library.length; i++){
            // book container
        const book = document.createElement('div');
        book.classList.add('book');
        book.classList.add(i);
         //book section 1 elements 
        const bSect1 = document.createElement('div');
        bSect1.classList.add('book-section-1')
        //title
        const titleDiv = document.createElement('div');
        titleDiv.classList.add("section-1-cont", "title-div");
        const title = document.createElement('h3');
        title.classList.add('section-1-child', 'book-title');
        title.setAttribute('contenteditable', 'true');
        titleDiv.appendChild(title);
        //author
        const authorDiv = document.createElement('div');
        authorDiv.classList.add("section-1-cont", "author-div");
        const author = document.createElement('span');
        author.classList.add("section-1-child", "book-author");
        const authorName = document.createElement('span');
        authorName.classList.add("section-1-child", "author");
        authorName.setAttribute('contenteditable', 'true');
        authorDiv.appendChild(author);
        authorDiv.appendChild(authorName);
        //////pages
        const pagesDiv = document.createElement('div');
        pagesDiv.classList.add("section-1-cont", "pages-div");
        const pages = document.createElement('span');
        pages.classList.add("section-1-child", "book-pages");
        const pagesNumber = document.createElement('span');
        pagesNumber.classList.add("section-1-child", "pages");
        pagesNumber.setAttribute('contenteditable', 'true');
        pagesDiv.appendChild(pages);
        pagesDiv.appendChild(pagesNumber);
        //read
        const readDiv = document.createElement('div');
        readDiv.classList.add("section-1-cont", "read-div");
        const read = document.createElement('span');
        read.classList.add("section-1-child", "book-read");
        const readYesNo = document.createElement('span');
        readYesNo.classList.add("section-1-child", "read");
        readYesNo.setAttribute('contenteditable', 'true');
        readDiv.appendChild(read);
        readDiv.appendChild(readYesNo);
             //book section 2 elements 
        const bSect2 = document.createElement('div');
        bSect2.classList.add("book-section-2");
        const updateDiv = document.createElement('div');
        updateDiv.classList.add("update-container");
        const update = document.createElement('button');
        update.classList.add("update-button");
        update.innerHTML = "Update";
        updateDiv.appendChild(update);
        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add("delete-icon-container");
        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add("delete-icon", i);
        deleteIcon.setAttribute('src', 'images/delete.svg');
        deleteDiv.appendChild(deleteIcon);
        //append sections to container
        bSect1.appendChild(titleDiv);
        bSect1.appendChild(authorDiv);
        bSect1.appendChild(pagesDiv);
        bSect1.appendChild(readDiv);
        bSect2.appendChild(updateDiv);
        bSect2.appendChild(deleteDiv);
        //append to book container 
        book.appendChild(bSect1);
        book.appendChild(bSect2); 
        //append book to grid
        gridContainer.appendChild(book);   
    }    
}


    //deleteBook()
        //delete book 
        // re display book 
    //UpdateBookInfo()



function deleteAll(){
    library = [];
    const gridContainer = document.getElementById("grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


    document.getElementById("add-button").addEventListener('click', addBookToLibrary);
    document.getElementById("delete-button").addEventListener('click', deleteAll);