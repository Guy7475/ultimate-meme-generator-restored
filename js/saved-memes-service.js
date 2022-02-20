const STORAGE_KEY = 'memeDB';
var gMemeGallery

function getMemesForDisplay() {
    gMemeGallery = loadFromStorage(STORAGE_KEY)
    if(!gMemeGallery || !gMemeGallery.length) {
        gMemeGallery = []
    }
    
    return gMemeGallery
}

function SaveMemeToStorage() {
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.map(line => {
            drawText(line);
            const meme = gCanvas.toDataURL();
            gMemeGallery.unshift(meme)
            saveToStorage(STORAGE_KEY, gMemeGallery)
            renderSavedMemes()
            alert('Your artwork added to "Saved Memes"')
        });
    };
    let num = gImgs[gMeme.selectedImgId].id;
    img.src = `./img/meme-imgs (square)/${num}.jpg`;

}

function onOpenSavedMemes() {
    elSavedMemes = document.querySelector('.saved-meme-gallery')
    elSavedMemes.style.display = 'block'

    elSavedMemes = document.querySelector('.generator-panel')
    elSavedMemes.style.display = 'none'
}

function renderSavedMemes() {
    let memes = getMemesForDisplay();
    let strHTML = memes.map(meme => {
        return `
        <img class="saved-gallery-item" src="${meme}"  onclick="onClickedsavedMeme('${meme}')">
        `;
    });
    let elMemeGallery = document.querySelector('.saved-meme-grid')
    elMemeGallery.innerHTML = strHTML.join('')
}

// TODO - click on saved to open
function onClickedsavedMeme(imgURL) {
    // getMeme(imgURL);
}

function ondownloadMeme(elLink) {
    const data = gCanvas.toDataURL()
    // console.log(data);
    elLink.href = data
    elLink.download = 'my-meme.jpg'
}