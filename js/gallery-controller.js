'use strict';

function renderGallery() {
    const images = getImagesForDisplay();
    let strHTML = images.map(image => {
        return `
        <img class="glry-img" src="${image.url}" alt="" onclick="onImgSelect(${image.id})">
        `;
    });
    let elGallery = document.querySelector('.gallery-grid');
    elGallery.innerHTML = strHTML.join('');
}

function onImgSelect(imgId) {
    let elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'none';
    setImg(imgId);
    let generatorPanel = document.querySelector('.generator-panel');
    generatorPanel.style.display = 'flex';
    renderMeme();
}

function onImFlexible() {
    gMeme = {
        selectedImgId: getRandomIntInclusive(1, gImgs.length),
        selectedLineIdx: 0,
        lines: [
            {
                pos: { x: 150, y: 50 },
                dimen: { width: 0, height: 0 },
                txt: gRandMemeLines[getRandomIntInclusive(0, gRandMemeLines.length - 1)],
                size: getRandomIntInclusive(15, 25),
                align: 'center',
                fontColor: getRandomColor(),
                StrokeColor: getRandomColor(),
                font: 'Impact',
                isDrag: false,
            },
            {
                pos: { x: 150, y: 275 },
                dimen: { width: 0, height: 0 },
                txt: gRandMemeLines[getRandomIntInclusive(0, gRandMemeLines.length - 1)],
                size: getRandomIntInclusive(15, 25),
                align: 'center',
                fontColor: getRandomColor(),
                StrokeColor: getRandomColor(),
                font: 'Impact',
                isDrag: false,
            }
        ],
    };
    setCurrLine();
    gAreLinesInMeme = true;
    onMenuSelection('generator-panel')
}



