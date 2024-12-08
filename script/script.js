function init() {
    renderBooks();
    getBooksFromLocalStorage();

}

function renderBooks() {
    let container_books = document.getElementById('main_container');
    container_books.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        container_books.innerHTML += templateBooks(indexBook);
        renderComments(indexBook); // in schleife ausfuehren weil nur hier indexBooks definiert ist.
    }
    saveBooksInLocalStorage();
}

function renderComments(indexBook) {
    let book = books[indexBook];
    let dislpayComments = document.getElementById(`display_comments${indexBook}`);
    dislpayComments.innerHTML = "";
    if (book.comments.length === 0) {
        dislpayComments.innerHTML = `<p id="placeholder_display_comments" class="placeholder_display_comments"><i>Noch keine Kommentare vorhanden. Schreib den ersten Kommentar!</i></p>`
    } else {
        for (let indexComment = 0; indexComment < book.comments.length; indexComment++) {
            dislpayComments.innerHTML += templateDisplayComments(indexBook, indexComment);
            dislpayComments.classList.remove('placeholder_display_comments');
        }
    }

}

function templateDisplayComments(indexBook, indexComment) {
    let book = books[indexBook];
    let comment = book.comments[indexComment]
    return `
    <p><strong>${comment.name}:</strong></p>
    <p class="comment_comment_section">${comment.comment}</p>
    `
}

function addComment(indexBook) {
    let inputAddCommentRef = document.getElementById(`input_add_comment${indexBook}`);
    let newComment = inputAddCommentRef.value;

    if (inputAddCommentRef.value === "") {
        alert('Bitte geben Sie einen Kommentar ein bevor Sie absenden.')
    } else {
        books[indexBook].comments.push({ name: "Benutzername", comment: newComment });
        renderComments(indexBook)
        inputAddCommentRef.value = "";
        saveBooksInLocalStorage();
    }
}

function changeHeartStatus(indexBook) {
    let book = books[indexBook];
    let heartImgRef = document.getElementById(`heart_status_img${indexBook}`);
    let nbrLikesRef = document.getElementById(`number_of_likes${indexBook}`);
    book.liked = !book.liked;
    if(book.liked === true){
        heartImgRef.src = "./img_icon/heart_icon_liked.png";
        book.likes +=1;
    } else {
        heartImgRef.src = "./img_icon/heart_icon_unliked.png"; 
        book.likes -=1;
    }
    nbrLikesRef.innerText = book.likes;
    saveBooksInLocalStorage();
}
