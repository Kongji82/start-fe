// Quiz 1
// 문자열 합치기
const year = 2022;
const month = 12;
const day = 3;
let dateString = `${year}-${month}-`

if (day < 10){
    dateString += `0${day}`
} else {
    dateString += `${day}`
}

console.log(dateString);

// Quiz 2
// 문자열 분리
const dateString2 = "2022-12-12";
let result2 = dateString2.split('-').map(str => parseInt(str));
console.log(result2)

// Quiz 3
// 문자열 변경
const text3 = "나는 XX를 좋아해";
const item = "JS";
const result3 = text3.replace('XX', item);

console.log(result3);

// Quiz 4
// 문자열 검색
const text4 = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

console.log('No.4 : ' + (text4.indexOf(searchText) > -1))

// Quiz 5
// 모든 배열값 더하기
// point3이 생길수도 있을때 대응
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

function sum(...arrarys) {
    console.log(arrarys)
    let result = 0;
    arrarys.forEach(array => {
        array.forEach(value => {
            result += value;
        });
    });
    return result;
}

const result5 = sum(point1, point2, [1, 2, 3, 4,5]);
console.log(`No.5: ${result5}`);

// Quiz 6
// 소수점 이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

console.log(Math.floor(a) + Math.floor(b));

// Quiz 7
// 랜덤수 구하기
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * max) + min;

console.log(randomNumber)

// Quiz 8
// 배수 확인
const target = 10;
const num = 3;

console.log(target % num == 0)

// Quiz 9
// 대문자로 변경
const nick = "kakao";
console.log(nick.toUpperCase());

// Quiz 10
// 원시타입 요소만 배열로 만들기
const items10 = [1, "a", true, ["a"], { n: 1 }];
let result10 = []
for (i=0; i < items10.length; i++){
    if (typeof(items10[i]) != "object" && typeof(items10[i]) != "function"){
        result10.push(items10[i])
    }
}
console.log(result10)

// Quiz 11
// 배열값 나누기

const items11 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize11 = 3;
const pad = '---'
let result = ''

items11.forEach((item, index) =>  {
    if (index != 0){
        if (index % pageSize11 == 0){
            result += pad;
        } else {
            result += ',';
        }
    }
    result += item;
})

console.log(result)

// Quiz 12
// 배열값 나눠서 다시 배열로
const items12 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize12 = 3;
let count = 0;
let answer12 = [];
let arr = [];

items12.forEach((item, index) => {
    if (index % pageSize12 == 0 && index != 0){
        answer12.push(arr);
        arr = []
    }
    arr.push(item)
})
if ((arr.length) > 0) {
    answer12.push(arr);
}

console.log(answer12);

// Quiz 13
// 페이지의 시작번호 구하기
const items13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const getStartIndexByPage = function (page) {
    console.log(pageSize * (page-1));
  };
  
  getStartIndexByPage(1); // 0
  getStartIndexByPage(2); // 3
  getStartIndexByPage(3); // 6

// Quiz 14
// 전화번호 패턴 검사
const phoneNumber = `010-1234-1234`;
const IsValidatePhoneNumber = (str) => {
    return /^\d{2,3}-\d{3,4}-\d{4}$/.test(str)
  }

console.log(IsValidatePhoneNumber(phoneNumber))

// Quiz 15
// 객체값 변경
const user = { nick: "nio", age: 20, location: "제주" };
user.age = 21;
user.location = '부산';

console.log(user);

// Quiz 16
// 문자열을 객채형으로
const text = "{a:1, b:2}";
const obj = eval("(" + text + ")");
console.log(obj);
console.log(typeof(obj));

// Quiz 17
// json을 문자열로
const user17 = { nick: "nio", age: 20, location: "제주" };
const str = JSON.stringify(user17)
console.log(str)
console.log(typeof(str))

// Quiz 18
// 새로운 배열 생성
const items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp = []
items18.forEach(item => {
    if (item % 2 == 0){
        temp.push(item)
    }
});
console.log(temp)

// Quiz 19
// 배열 필터
const list = [
    {
      id: 1,
      title: "JS",
      isPublic: true,
    },
    {
      id: 2,
      title: "기본",
      isPublic: true,
    },
    {
      id: 3,
      title: "ecma",
      isPublic: true,
    },
    {
      id: 4,
      title: "dom",
      isPublic: false,
    },
  ];

const publicObject = list.filter(obj => obj.isPublic);
const publicTitle = publicObject.map(obj => obj.title);
console.log(publicTitle);

// Quiz 20
// 다음일 구하기
const dday = "2022-02-02";
const today = new Date(dday);
today.setDate(today.getDate()+1);
const nextDay = today.toISOString().slice(0, 10);

console.log(nextDay);