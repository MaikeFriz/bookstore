function render (){
    let displayRender = document.getElementById('main');
    displayRender.innerHTML = "";
    for(let i = 0; i < books.length; i++){
        displayRender.innerHTML += templateRenderedItems(i)
        renderCom(i);
    }
}

function templateRenderedItems(i){
    return`
        <div class="container">
            <p>${books[i].name}</p>
            <p>${books[i].author}</p>
            <div id="comment_section${i}"></div>
            <div class="likes_number_heart_section">
                <p id="number_likes${i}" class="number_likes">${books[i].likes}</p>
                <img class="img_heart" id="like_heart_section${i}" src="${books[i].liked ? './img_icon/heart_icon_unliked.png' : './img_icon/heart_icon_liked.png'}" onclick="changeLikeStatus(${i})">
            </div>
        </div>
    `
}

function renderCom(i){
    let com = document.getElementById(`comment_section${i}`);

    if(books[i].comments.length === 0){
        com.innerHTML = `<p>Noch kein Kommentar vorhanden.</p>`
    } else {
    for(let indexCom = 0; indexCom < books[i].comments.length; indexCom++){
        com.innerHTML += templateCom(i, indexCom);
    }
}
}

function templateCom(i, indexCom){
    let b = books[i];
    let c = b.comments[indexCom];
    return `
    <p>${c.name}</p>
    <p>${c.comment}</p>
    `
}

function changeLikeStatus(i){
    let heartRef = document.getElementById(`like_heart_section${i}`);
    let likesRef = document.getElementById(`number_likes${i}`);

    if(books[i].liked === true){
        heartRef.src = "./img_icon/heart_icon_liked.png";
        books[i].likes +=1
    } else{
        heartRef.src ="./img_icon/heart_icon_unliked.png";
        books[i].likes -=1
    }
    books[i].liked = !books[i].liked;
    likesRef.innerText = books[i].likes;

}
