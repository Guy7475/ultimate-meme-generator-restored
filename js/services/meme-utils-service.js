'use strict';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// const randY = getRandomIntInclusive(50, canvasSize().height-50)

const gRandMemeLines = [
    'Mama make me Bamia',
    'Pukies everywhere',
    'Me love you long time',
];