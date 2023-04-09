const $num = document.querySelector('#num');
const $button = document.querySelector('#btn');
const $result = document.querySelector('#result');

$button.addEventListener('click', () => {
    let value = parseInt($num.value);
    let resultHtml = '';
    if (isNaN(value)){
        alert("숫자를 입력해주세요");
    } else {
        for (let i = 1; i < 10; i++) {
            resultHtml += `${value} x ${i} = ${value * i}<br>`;
        }
        $result.innerHTML = resultHtml;
    }
    
});
