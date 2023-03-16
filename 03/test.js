// const a = 'a'

// // array create
// const todos = ['운동'];
// const todo = '공부';
// todos.push(todo);
// console.log(todo);

// // read
// todos.forEach(function(todo) {
//     console.log(todo);
// })

// // update
// const updateTodo = '공부';
// const updateIndex = todos.findIndex(function(todo){
//     return todo === updateTodo;
// })

// todo[updateIndex] = '공부';
// console.log(todos);

// 공부 -> 게임 변환
// const newTodos = todos.map(function(todo) {
//     if (todo === updateTodo) {
//       return '게임';
//     }
//     return todo;
// });

// console.log(newTodos)

// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('정말 삭제합니까?');

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

// isNaN('1'); //숫자 여부

// parseInt('12');
// parseInt('09', 10); 
// parseFloat('10.33');

// var count = [10,20,30,40,50,60,70,100];
// var result = 0
// for (var i = 0; i < count.length; i++){
//     result += count[i];
// }
// console.log(result / count.length);

for(var x =1; x <= 9; x++){
    for(var y =1; y <= 9; y++){
        console.log(`${x} * ${y} = ${x*y}`);
    }
}

function gugu() {
    for(var x =1; x <= 9; x++){
        for(var y =1; y <= 9; y++){
            console.log(`${x} * ${y} = ${x*y}`);
        }
    }   
}

class Calculator {
    add(x, y) {
      return x + y;
    }
    subtract(x, y) {
      return x - y;
    }
    gugu(){
        for(var x =1; x <= 9; x++){
            for(var y =1; y <= 9; y++){
                console.log(`${x} * ${y} = ${x*y}`);
            }
        }   
    }
  }

result = 0
while (true){
    var answer = window.prompt('숫자를 입력하세요')
    if (Number(answer)){
        result += Number(answer)
    } else {
        break
    }
}
window.alert(`합은 ${result}`)