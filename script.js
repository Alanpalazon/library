let library = [];
const inputs = document.querySelectorAll('input');

function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}
//working
function createBookElements(){ 
         const book = document.createElement('div');
         book.classList.add('book');
         book.classList.add(`${library.length}`);
         const bSect1 = document.createElement('div');
         bSect1.classList.add('book-section-1');
         const title = document.createElement('h3');
         title.classList.add('book-title');
         title.textContent = inputs[0].value;
         title.setAttribute('contenteditable', 'true');
         bSect1.appendChild(title);
         const author = document.createElement('span');
         author.classList.add("book-author");
         author.textContent = "Author";
         const authorName = document.createElement('span');
         authorName.classList.add("author");
         authorName.textContent = inputs[1].value;
         authorName.setAttribute('contenteditable', 'true');
         bSect1.appendChild(author);
         bSect1.appendChild(authorName);
         const pages = document.createElement('span');
         pages.classList.add("book-pages");
         pages.textContent = "Pages";
         const pagesNumber = document.createElement('span');
         pagesNumber.classList.add("pages");
         pagesNumber.textContent = inputs[2].value;
         pagesNumber.setAttribute('contenteditable', 'true');
         bSect1.appendChild(pages);
         bSect1.appendChild(pagesNumber);
         const read = document.createElement('span');
         read.classList.add("book-read");
         read.textContent = "Read"
         const readYesNo = document.createElement('span');
         readYesNo.classList.add("read");
         if(library[library.length-1].read == "Read"){ readYesNo.textContent = "Yes"} else readYesNo.textContent = "No";
         readYesNo.setAttribute('contenteditable', 'true');
         bSect1.appendChild(read);
         bSect1.appendChild(readYesNo);
         const bSect2 = document.createElement('div');
         bSect2.classList.add("book-section-2");
         const update = document.createElement('button');
         update.classList.add("update-button");
         update.innerHTML = "Update";
         const deleteIcon = document.createElement('img');
         deleteIcon.classList.add("delete-icon", `${library.length}`);
         deleteIcon.setAttribute('src', 'images/delete.svg');
         bSect2.appendChild(update);
         bSect2.appendChild(deleteIcon);
         book.appendChild(bSect1);
         book.appendChild(bSect2); 
         return book;    
}

//working
function addBookToLibrary() { 
    const newBook = new book(inputs[0].value, inputs[1].value , inputs[2].value);
    if(document.getElementById("read-input").checked){ newBook.read = "Read";} else newBook.read = "Not read";
    library.push(newBook);
    return;
}

//fix non-clickable eitable conent when empty 
//clean up html by removing unnecessary divs 

function displayBooks(){
    const gridContainer = document.getElementById("grid-container");
    for(let i = 0; i<library.length; i++){
        //createBookElements - fix to add text content
        gridContainer.appendChild(createBookElements());
    } 
 return;
}    


//UpdateBookInfo()


//working
function clearLibrary(){
    const gridContainer = document.getElementById("grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    return;
}


//working
document.getElementById("add-button").addEventListener('click', function(e){
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
});

//working
document.getElementById("delete-button").addEventListener('click', function(){
    library = [];
    clearLibrary();
});

// uses event bubbling: event handler attached to parent and applied to children which meet condition 
document.querySelector('#grid-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-icon')) {
        let clickedIcon = e.target.getAttribute("class");//class system has errors - change!
        let clickedIconClass = parseInt(clickedIcon[clickedIcon.length-1]);
        library.splice([clickedIconClass-1],1);
        clearLibrary();
        displayBooks();
        return;    
    }
  });