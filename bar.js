"use strict"

window.addEventListener("load", startProgram);

const num = [11, 16, 6, 29, 21, 12, 30, 9, 9, 29, 7, 2, 12, 3, 20, 26, 13, 22, 9, 25, 19, 1, 25, 31, 19, 17, 10, 8, 20, 24, 2, 25, 24, 11, 10, 14, 5, 12, 30, 13, 26,];



function startProgram() {
    console.log("java sccipt are  goarted");

    const bars = document.querySelectorAll(".bar");

    const firstBar = bars[0];

    const h = num[0] / 32 * 100;

    firstBar.style.height = `${h}px`;

};