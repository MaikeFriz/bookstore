function renderBooks(){
    let container_books = document.getElementById('main_container');
    container_books.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++){
        container_books.innerHTML += templateBooks(indexBook);
        renderComments(indexBook); // in schleife ausfuehren weil nur hier indexBooks definiert ist.
    }
}

function templateBooks(indexBook){
    let book = books[indexBook];
    return `
<div class="book_presentation_background">
    <div class="title_div">
        <img class="display_img_book" src="./img_icon/book.png">
        <h2>${book.name}</h2>
    </div>
    <div class="separator_horizontal"></div>
    <div class="lower_part_book_presentation">
            <div class="details_book">
                <div class="price_like_section">
                        <p><strong>${book.price.toFixed(2)} €</strong></p>
                        <div id="heart_status${indexBook}">
                            ${book.likes}<img onclick="changeHeartStatus(${indexBook})" id="heart_status_img" src="./img_icon/heart_icon_unliked.png">
                        </div>                
                </div>
                <div class="lower_detail_book_section">
                    <p><strong>Autor:</strong> ${book.author}</p>
                    <p><strong>Erscheinungsjahr:</strong> ${book.publishedYear}</p>
                    <p><strong>Genre:</strong> ${book.genre}</p>
                </div>
            </div>
        <div class="separator_vertical"></div>
        <div class="comment_section">
            <div id="display_comments${indexBook}" class="display_comments"></div>
            <div class="input_comment_section">
                <input id="input_add_comment${indexBook}" type="text" placeholder="Schreibe einen Kommentar ...">
                <span onclick ="addComment(${indexBook})" class="material-symbols-outlined">send</span>
            </div>
        </div>
    </div>
    `
}

function renderComments(indexBook){
    let book = books[indexBook];
    let dislpayComments = document.getElementById(`display_comments${indexBook}`);
    dislpayComments.innerHTML = "";
    if (book.comments.length === 0){
        dislpayComments.innerHTML = `<p id="placeholder_display_comments" class="placeholder_display_comments"><i>Noch keine Kommentare vorhanden. Schreib den ersten Kommentar!</i></p>`
    } else{
        for(let indexComment = 0; indexComment < book.comments.length; indexComment++){
            dislpayComments.innerHTML += templateDisplayComments(indexBook, indexComment);
            dislpayComments.classList.remove('placeholder_display_comments');
        }
    }
}

function templateDisplayComments(indexBook, indexComment){
    let book = books[indexBook];
    let comment = book.comments[indexComment]
    return`
    <p><strong>${comment.name}:</strong></p>
    <p class="comment_comment_section">${comment.comment}</p>
    `
}

function addComment(indexBook){
    let inputAddCommentRef = document.getElementById(`input_add_comment${indexBook}`);
    let newComment = inputAddCommentRef.value;

    books[indexBook].comments.push({name: "Benutzername", comment:newComment});
    renderComments(indexBook)
    inputAddCommentRef.value = "";
}

function changeHeartStatus(indexBook){
    let book = books[indexBook];
    let heartImgRef = document.getElementById(`heart_status${indexBook}`).querySelector('img');
    let likesTextRef = document.getElementById(`heart_status${indexBook}`);

    if (book.liked){ // Überprüft, ob das Buch bereits geliked ist (book.liked === true).
        book.likes -= 1;
        heartImgRef.src = "./img_icon/heart_icon_unliked.png";
    } else {
        book.likes += 1;
        heartImgRef.src = "./img_icon/heart_icon_liked.png";
    }
    book.liked = !book.liked; //liked status umschalten
    likesTextRef.firstChild.textContent = `${book.likes} `;

}

