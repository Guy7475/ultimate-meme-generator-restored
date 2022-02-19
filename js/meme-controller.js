'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // addEventListeners()
    addMouseListeners();
    addTouchListeners();
    canvasSize();
    renderGallery();
    addListeners();
    renderMeme();
}


// listeners
function addListeners() {
    listenToText();
    listenToFontColor();
    listenToStrokeColor();
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove);
    gCanvas.addEventListener('mousedown', onDown);
    gCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove);
    gCanvas.addEventListener('touchstart', onDown);
    gCanvas.addEventListener('touchend', onUp);
}

function listenToText() {
    renderMeme();
    let elText = document.querySelector("input[name=text-box]");
    elText.addEventListener("input", function () {
        let txt = elText.value;
        console.log(txt);
        setLineTxt(txt);
        renderMeme();

    }, false);
}
function listenToFontColor() {
    let elColorPicker = document.querySelector("input[name=font-color]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;

        setFontColor(color);
        renderMeme();

    }, false);
}

function listenToStrokeColor() {
    let elColorPicker = document.querySelector("input[name=stroke-color]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;
        setStrokeColor(color);
        renderMeme();

    }, false);
}

<<<<<<< HEAD
function renderMeme() {
    getMeme();
}
=======
>>>>>>> 106cac6bd106da41aa10dec783507668051a11da


// TODO - compress down to one funtion with swith case on service
function onSwitchLine() {
    setCurrLine();
    console.log(currLine);
}

function onChangingYcor(val) {
    setLineYcor(val);
    renderMeme();
}

function onAddLine() {
    createLine();
    renderMeme();
}

function onDeleteLine() {
    deleteCurrLine();
    renderMeme();
}

function onResizeLine(val) {
    setLineSize(val);
    renderMeme();
}

function onTextAlign(val) {
    setTextDirec(val);
    renderMeme();
}

function onFontSelection(font) {
    setFont(font);
    renderMeme();
}

function canvasSize() {
    const canvas = document.querySelector('#my-canvas');
    let canvSize = {
        width: canvas.width,
        height: canvas.height
    };
    setCanvsSize(canvSize);
}

function resizeCanvas() {
    gCanvas.height = document.querySelector('.canvas-container').offsetHeight;
    gCanvas.width = document.body.offsetWidth;
    //TODO restore canvas after resizing
<<<<<<< HEAD
}
=======
  }
>>>>>>> 106cac6bd106da41aa10dec783507668051a11da
