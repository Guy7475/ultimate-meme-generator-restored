'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function onDown(ev) {
    const pos = getEvPos(ev);
    if (!isLineHover(pos)) return

    console.log('onDown()');
    currLine.isDrag = true;
    // gMeme.selectedLineIdx = gMeme.
    getMeme()
}

function onMove(ev) {
    const pos = getEvPos(ev);
    if (!currLine.isDrag) return
    currLine.pos = { x: pos.x, y: pos.y }
    getMeme()
}

function onUp() {
    currLine.isDrag = false
}

function isLineHover(clickedPos) {    
    gMeme.lines.map(line => {

        if (clickedPos.x < (line.pos.x - (line.dimen.width / 2))) return
        if (clickedPos.x > (line.pos.x + (line.dimen.width / 2))) return
        if (clickedPos.y < (line.pos.y - (line.dimen.height / 2))) return
        if (clickedPos.y > (line.pos.y + (line.dimen.height / 2))) return
        
        currLine = line
    })
    return true
    
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}