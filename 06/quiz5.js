const $box = document.querySelector('.box');
const $secondBox = document.querySelector('.box1');
let isMouseDown = false;

function mouseMove($component){
    if (isMouseDown) {
        $component.style.left = `${event.clientX - 50}px`;
        $component.style.top = `${event.clientY - 50}px`;
    }
}

function mouseDownEvent($component) {
    isMouseDown = true;
}

function mouseUp($component){
    isMouseDown = false;
}
function boxSetup($component){
    $component.addEventListener('mousemove', ()=> {
        mouseMove($component);
    });
    $component.addEventListener('mousedown', ()=> {
        mouseDownEvent($component);
    });
    $component.addEventListener('mouseup', ()=> {
        mouseUp($component);
    });
}

function init(){
    boxSetup($box);
    boxSetup($secondBox);
}

init();