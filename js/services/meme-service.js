'use strict';

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [],
};

var gAreLinesInMeme = false;

var currLine; //= gMeme.lines[gMeme.selectedLineIdx];

function createLine() {
    let yPos;
    if (gMeme.lines.length < 1) yPos = 50;
    else if (gMeme.lines.length === 1) yPos = 275;
    else yPos = 200;

    const newLine = {
        pos: { x: 150, y: yPos },
        dimen: { width: 0, height: 0 },
        txt: 'Edit this text',
        size: 25,
        align: 'center',
        fontColor: 'white',
        StrokeColor: 'blue',
        font: 'Impact',
        isDrag: false,
    };
    gMeme.lines.push(newLine);
    setCurrLine();
    gAreLinesInMeme = true;
}

function getMeme() {
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gMeme.lines.map(line => {
            drawFocusBox();
            drawText(line);
        });
    };
    let num = gImgs[gMeme.selectedImgId].id;
    img.src = `./img/meme-imgs (square)/${num}.jpg`;
}

function drawText(line) {
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.fontColor;
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.pos.x, line.pos.y);
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
    setLineDimen(line);
}

function drawFocusBox() {
    if (!currLine) return;
    gCtx.beginPath();
    gCtx.rect(
        currLine.pos.x - currLine.dimen.width * .75,
        currLine.pos.y - currLine.dimen.height,
        currLine.dimen.width * 1.5,
        currLine.dimen.height * 1.5,
    );
    gCtx.save();
    gCtx.fillStyle = 'orange';
    gCtx.strokeStyle = 'rgb(123, 255, 0)';
    gCtx.lineWidth = 2;
    gCtx.stroke();
    gCtx.restore();
}

function setLineDimen(line) {
    let textMetrics = gCtx.measureText(line.txt);
    line.dimen.width = textMetrics.width;
    line.dimen.height = textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent;
}

function setLineYcor(val) {
    currLine.pos.y += val * 3;
}

function setCurrLine() {
    gMeme.selectedLineIdx += 1;
    // gMeme.lines.sort((a,b) => a.yCor - b.yCor)
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0;
    }
    currLine = gMeme.lines[gMeme.selectedLineIdx];
    getMeme();
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId - 1;
}

function deleteCurrLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    setCurrLine();
}

function setLineTxt(text) {
    if (!gAreLinesInMeme) return;
    currLine.txt = text;
}

function setLineSize(val) {
    if (!gAreLinesInMeme) return;
    currLine.size += val;
}

function setTextDirec(val) {
    if (!gAreLinesInMeme) return;
    currLine.align = val;
}

function setFontColor(color) {
    if (!gAreLinesInMeme) return;
    currLine.fontColor = color;
}

function setStrokeColor(color) {
    if (!gAreLinesInMeme) return;
    currLine.strokeColor = color;
    console.log('gCtx.strokeStyle:', gCtx.strokeStyle);
}

function setFont(font) {
    if (!gAreLinesInMeme) return;
    currLine.font = font;
}

function setGalleryBySearch(txt) {
    gFilteredImgs = [];
    gFilteredImgs = gImgs.filter(img => {
        var isIncludes = false;
        img.keywords.forEach(keyword => {
            if (keyword.includes(txt)) {
                isIncludes = true;
            }
        });
        return isIncludes;
    });
    
}

function getImagesForDisplay() {
    if (gFilterBy.length > 0) return gFilteredImgs;
    else return gImgs;
}
function setCanvsSize(canvSize) {
    // gCanvWidth = canvSize.width;
    // gCanvheight = canvSize.height;
}