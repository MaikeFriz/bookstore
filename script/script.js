function renderContent(){
    renderBooks();
}

function renderBooks(){
    let container_books = document.getElementById('main_container');
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
                        <div>${book.likes}<span class="material-symbols-outlined">favorite</span></div>
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
                <input type="text" placeholder="Schreibe einen Kommentar ...">
                <span class="material-symbols-outlined">send</span>
            </div>
        </div>
    </div>
    `
}

function renderComments(indexBook){
    let book = books[indexBook];
    let dislpayComments = document.getElementById(`display_comments${indexBook}`);
    if (book.comments.length === 0){
        dislpayComments.innerHTML = `<p class="placeholder_display_comments"><i>Noch keine Kommentare vorhanden. Schreib den ersten Kommentar!</i></p>`
    } else{
        for(let indexComment = 0; indexComment < book.comments.length; indexComment++){
            dislpayComments.innerHTML += templateDisplayComments(indexBook, indexComment);
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


