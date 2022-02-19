'use strict';

var gImgs = []
for (let index = 1; index < 18; index++) {
    const img = { id: index, url: `./img/meme-imgs (square)/${index}.jpg`, keywords: [] }
    gImgs.push(img)
}

function getImagesForDisplay() {
    return gImgs
}

// var gImgs = [
//     { id: 1, url: './img/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
//     { id: 2, url: './img/meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] },
//     { id: 3, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 4, url: './img/meme-imgs (square)/4.jpg', keywords: ['funny', 'cat'] },
//     { id: 5, url: './img/meme-imgs (square)/5.jpg', keywords: ['funny', 'cat'] },
//     { id: 6, url: './img/meme-imgs (square)/6.jpg', keywords: ['funny', 'cat'] },
//     { id: 7, url: './img/meme-imgs (square)/7.jpg', keywords: ['funny', 'cat'] },
//     { id: 8, url: './img/meme-imgs (square)/8.jpg', keywords: ['funny', 'cat'] },
//     { id: 9, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 10, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 11, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 12, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 13, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 14, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 15, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 16, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 17, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
//     { id: 18, url: './img/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
// ];

