'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function onDown(ev) {
    if (gMeme.lines.length < 1) return
    const pos = getEvPos(ev);
    if (!isLineHover(pos)) return
    currLine.isDrag = true;
    getMeme()
}

function onMove(ev) {
    const pos = getEvPos(ev);
    if (gMeme.lines.length < 1) return
    if (!currLine.isDrag) return
    currLine.pos = { x: pos.x, y: pos.y }
    getMeme()
}

function onUp() {
    if (gMeme.lines.length < 1) return
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