"use strict"

window.addEventListener("load", startProgram);

const num = [11, 16, 6, 29, 21, 12, 30, 9, 9, 29, 7, 2, 12, 3, 20, 26, 13, 22, 9, 25, 19, 1, 25, 31, 19, 17, 10, 8, 20, 24, 2, 25, 24, 11, 10, 14, 5, 12, 30, 13, 26,];



function startProgram() {
    console.log("java sccipt are  goarted");

    displayBar();
};

function displayBar() {
    const bars = document.querySelectorAll(".bar");
    
    
    for(let i=0; i<40; i++) {
        const newBar = bars[i];
        const h = num[i] / 32 * 100;
        
        newBar.style.height = `${h}px`;
        
    };
};