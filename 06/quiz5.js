const $box = document.querySelector('.box');
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

function init(){
    $box.addEventListener('mousemove', ()=> {
        mouseMove($box);
    });
    $box.addEventListener('mousedown', ()=> {
        mouseDownEvent($box);
    });
    $box.addEventListener('mouseup', ()=> {
        mouseUp($box);
    });
}

init();