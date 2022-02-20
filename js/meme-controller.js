'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderSavedMemes();
    canvasSize();
    renderGallery();
    addListeners();
}

// listeners:
function addListeners() {
    addMouseListeners();
    addTouchListeners();
    listenToSearch()
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

function listenToSearch() {
    let elText = document.querySelector("input[name=search-box]");
    elText.addEventListener("input", function () {
        let txt = elText.value;
        console.log(txt);
        setGalleryBySearch(txt);
        renderGallery();
    }, false);
}

function listenToText() {
    let elText = document.querySelector("input[name=text-box]");
    elText.addEventListener("input", function () {
        let txt = elText.value;
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

function renderMeme() {
    getMeme();
}

function onMenuSelection(val) {
    let element = Array.from(document.querySelectorAll(`.main-section`));
    element.forEach(item => {
        item.style.display = 'none';
    });
    if (val === 'generator-panel') {
        document.querySelector(`.${val}`).style.display = 'flex';
    }
    else document.querySelector(`.${val}`).style.display = 'block';
}


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

function onSaveMeme() {
    SaveMemeToStorage();
    renderSavedMemes();
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
}