const $blackBoard = document.querySelector(`.black`);
const $whiteBoard = document.querySelector(`.white`);
const $spans = document.querySelectorAll('span');

function handleClick(event) {
    const $clickSpan = event.target;
    
    $spans.forEach(span => {
        if (span === $clickSpan){
            span.style.backgroundColor = 'red';
        } else if (span.classList.contains('black')){
            span.style.backgroundColor = 'black';
        } else if (span.classList.contains('white')) {
            span.style.backgroundColor = 'white';
        }
    });
}

$spans.forEach(span => {
    span.addEventListener('click', handleClick);
});