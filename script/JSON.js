//funktioniert noch nicht

function saveBooksInLocalStorage(){
    localStorage.setItem("myBooks",JSON.stringify(books));
}

function getBooksFromLocalStorage(){
    let storedBooks = localStorage.getItem("myBooks");

    if(storedBooks){
        books = JSON.parse(storedBooks)
    } else {
        books = [];
    }
    console.log('Books gespeichert:', books);
}
