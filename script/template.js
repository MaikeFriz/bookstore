
function templateBooks(indexBook) {
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
                    <p class="number_of_likes" id="number_of_likes${indexBook}">${book.likes}</p>
                    <img onclick="changeHeartStatus(${indexBook})" id="heart_status_img${indexBook}" src="${book.liked ? './img_icon/heart_icon_liked.png' : './img_icon/heart_icon_unliked.png'}" class="heart_status_img">
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
                <span onclick="addComment(${indexBook})" class="material-symbols-outlined">send</span>
            </div>
        </div>
    </div>
    `
}
//Fuer Herz-Status: tenaerer Operator kann wie if-Funtkion verwendet werden im html:
//Bedingung ? Wert wenn true : Wert_wenn_false