function renderBooks(){
    let mainContainer = document.getElementById('main_container');
    for(let indexBooks = 0; indexBooks < books.length; indexBooks++){
        mainContainer.innerHTML += templateDisplayBooks(indexBooks);
    }
}

function templateDisplayBooks(indexBook){
    let book = books[indexBook];
    return`
    <div class="book_presentation_background">
    <div class="title_div">
        <img class="display_img_book" src="./img_icon/book.png">
        <h2>${book.name}</h2>
    </div>
    <div class="separator_horizontal"></div>
    <div class="lower_part_book_presentation">
            <div class="details_book">
                <div class="price_like_section">
                        <p><strong>${book.price} €</strong></p>
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
            <div id="display_comments" class="display_comments"></div>
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
    for(let indexComment = 0; indexComment < book.comments.length; indexComment++){
        dislpayComments.innerHTML += templateDisplayComments(indexBook, indexComment);
    }
}

function templateDisplayComments(){
    return`
    <p>${book.comments[indexComment].name}</p>
    <p>${book.comments[indexComment].comment}</p>
    `
}