'use strict';
var gCanvWidth;
var gCanvheight;

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            pos: { x: 150, y: 50 },
            dimen: { width: 0, height: 0 },
            // cor: { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, bl: { x: 0, y: 0 }, br: { x: 0, y: 0 } },
            txt: 'line 1',
            size: 30,
            align: 'center',
            fontColor: 'white',
            StrokeColor: 'black',
            font: 'Impact',
            isDrag: false,
        },
        {
            pos: { x: 150, y: 275 },
            dimen: { width: 0, height: 0 },
            // cor: { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, bl: { x: 0, y: 0 }, br: { x: 0, y: 0 } },
            txt: 'line 2',
            size: 30,
            align: 'center',
            fontColor: 'white',
            StrokeColor: 'black',
            font: 'Impact',
            isDrag: false,
        },
    ]
};

var currLine = gMeme.lines[gMeme.selectedLineIdx];

function createLine() {
    const newLine = {
        pos: { x: 150, y: 200 },
        dimen: { width: 0, height: 0 },
        // cor: { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, bl: { x: 0, y: 0 }, br: { x: 0, y: 0 } },
        txt: 'middle line',
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
    setLineCor(line);
}

function drawFocusBox() {
    if (!currLine) return;
    gCtx.beginPath();
    gCtx.rect(
        currLine.pos.x - currLine.dimen.width*.75 ,
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
//
function setLineCor(line) {
    // let x = line.pos.x;
    // let y = line.pos.y;

    // line.cor.tl.x = x/2;
    // line.cor.tl.y = y/2;

    // line.cor.tr.x = x + (line.dimen.width/2);
    // line.cor.tr.y = y/2;

    // line.cor.bl.x = x/2
    // line.cor.bl.y = y + (line.dimen.height/2);

    // line.cor.br.x = (x/2) + (line.dimen.width);
    // line.cor.br.y = (y/2) + (line.dimen.height);
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
    getMeme()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId - 1;
}

function deleteCurrLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    setCurrLine();
}

function setLineTxt(text) {
    currLine.txt = text;
}

function setLineSize(val) {
    currLine.size += val;
    console.log(currLine);
}

function setTextDirec(val) {
    currLine.align = val;
}

function setFontColor(color) {
    currLine.fontColor = color;
}

function setStrokeColor(color) {
    currLine.StrokeColor = color;
}

function setFont(font) {
    currLine.font = font;
}

function setCanvsSize(canvSize) {
    gCanvWidth = canvSize.width;
    gCanvheight = canvSize.height;
}



