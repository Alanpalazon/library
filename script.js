let library = [];
const inputs = document.querySelectorAll('input');

function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function createBookElements(){ 
    //book container
    const book = document.createElement('div'); book.classList.add('book', `${library.length}`);
    //book section 1 
    const bSect1 = document.createElement('div');
    bSect1.classList.add('book-section-1');
        //title elements 
    const title = document.createElement('h3'); 
    title.classList.add('book-title');
    title.textContent = inputs[0].value;
    title.setAttribute('contenteditable', 'true');
    bSect1.appendChild(title);
        //author elements
    const author = document.createElement('span');
    author.classList.add("book-author");
    author.textContent = "Author";
    const authorName = document.createElement('span');
    authorName.classList.add("author");
    authorName.textContent = inputs[1].value;
    bSect1.appendChild(author); 
    bSect1.appendChild(authorName); 
        //pages elements 
    const pages = document.createElement('span');
    pages.classList.add("book-pages"); 
    pages.textContent = "Pages";
    const pagesNumber = document.createElement('span');
    pagesNumber.classList.add("pages");
    pagesNumber.textContent = inputs[2].value; 
    bSect1.appendChild(pages); 
    bSect1.appendChild(pagesNumber);
        //read elements 
    const read = document.createElement('span'); 
    read.classList.add("book-read");
    read.textContent = "Read"; 
    const readYesNo = document.createElement('span');
    readYesNo.classList.add("read",`${library.length}`);
    if(library[library.length-1].read == "Read"){ readYesNo.textContent = "Yes"} else readYesNo.textContent = "No";
    bSect1.appendChild(read);
    bSect1.appendChild(readYesNo); 
    //section 2 
    const bSect2 = document.createElement('div');
    bSect2.classList.add("book-section-2"); 
        //update button 
    const update = document.createElement('button');
    update.classList.add("update-button", `${library.length}`);  
    update.innerHTML = "Update";
        //delete button 
    const deleteIcon = document.createElement('img'); 
    deleteIcon.classList.add("delete-icon", `${library.length}`);
    deleteIcon.setAttribute('src', 'images/delete.svg'); 
    bSect2.appendChild(update);
    bSect2.appendChild(deleteIcon); 
    //append sections to book`
    book.appendChild(bSect1); 
    book.appendChild(bSect2); 
    return book;    
}

function addBookToLibrary() { 
    const newBook = new book(inputs[0].value, inputs[1].value , inputs[2].value);
    if(document.getElementById("read-input").checked){ newBook.read = "Read";} else newBook.read = "Not read";
    library.push(newBook);
    return;
}


function updateBook(e){
    if(e.target.classList.contains("update-button")){
        let read = document.querySelectorAll('.read');
        for(let i = 0; i < read.length; i++){
            if(read[i].classList[1] == e.target.classList[1]){
                if(read[i].textContent == "Yes"){read[i].textContent = "No";}
                else read[i].textContent = "Yes"
            }
        }
    }
}

function deleteBook(e){
    if (e.target.classList.contains('delete-icon')){
        let delIcons = Array.from(document.querySelectorAll('.delete-icon'));
        for(let i = 0; i<library.length; i++){
            if(library.indexOf(library[i]) == delIcons.indexOf(e.target)){
                library.splice(library.indexOf(library[i], 1));
                break;
            }
        }
        let books = document.querySelectorAll('.book');
        for(let j = 0; j<books.length; j++){
            if(books[j].classList[1] == e.target.classList[1]){
                document.querySelector("#grid-container").removeChild(books[j]);
                break;
            }
        }
    }
    return;               
}

function clearLibrary(){
    library = [];
    const gridContainer = document.getElementById("grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function addBook(e){
    if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" || inputs[2].value.includes(".")) return;
    else{
        addBookToLibrary();
        for(let i =0; i<library.length;i++){
            if(library[i] == library[library.length-1]){
                const gridContainer = document.getElementById("grid-container");
                gridContainer.appendChild(createBookElements());
            }
        }
        document.getElementById("form").reset();
        return;
    }
}



document.getElementById("add-button").addEventListener('click', addBook);
document.getElementById("delete-button").addEventListener('click', clearLibrary);
document.querySelector('#grid-container').addEventListener('click', deleteBook);
document.querySelector('#grid-container').addEventListener('click', updateBook);