'use strict';


// var gCanvWidth;
// var gCanvheight;

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
    ]
};

var currLine //= gMeme.lines[gMeme.selectedLineIdx];

function createLine() {
    let yPos;
    if (gMeme.lines.length < 1) yPos = 50;
    else if (gMeme.lines.length === 1) yPos = 275;
    else yPos = 200;

    const newLine = {
        pos: { x: 150, y: yPos },
        dimen: { width: 0, height: 0 },
        txt: 'Edit this text in fleld',
        size: 30,
        align: 'center',
        fontColor: 'white',
        StrokeColor: 'black',
        font: 'Impact',
        isDrag: false,
    };
    gMeme.lines.push(newLine);
    setCurrLine();
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
    gCtx.fillStyle = 'orange';
    // gCtx.fillRect( currLine.pos.x, currLine.pos.y, 150, 150);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();

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
    if (gMeme.lines.length < 1) return
    currLine.txt = text;
}

function setLineSize(val) {
    if (gMeme.lines.length < 1) return
    currLine.size += val;
}

function setTextDirec(val) {
    if (gMeme.lines.length < 1) return
    currLine.align = val;
}

function setFontColor(color) {
    if (gMeme.lines.length < 1) return
    currLine.fontColor = color;
}

function setStrokeColor(color) {
    if (gMeme.lines.length < 1) return
    currLine.StrokeColor = color;
}

function setFont(font) {
    if (gMeme.lines.length < 1) return
    currLine.font = font;
}

function setCanvsSize(canvSize) {
    // gCanvWidth = canvSize.width;
    // gCanvheight = canvSize.height;
}

