var x = 3;
var y = 4;
var z = x + y;
console.log(z);
alert("Hello world!!");
console.log('shun'.length);
console.log(12 + 3);//15//2
console.log(12 - 3);//15//2
console.log(12 * 3);//15//2
console.log(12/3);//15//2
console.log(12+'A');//12A//3
console.log(12+3+'A');//15A//3
console.log('A'+12+3);//A15//3
console.log('A' + 12 * 3);//A36//3
console.log('A' + (12 + 3));//正解はA36
textbook = { //復数行でも書ける
  title:"shun とサル",
  page: 1,
  auther:"shun"
  };
  console.log(textbook.title);//これもOK
console.log(textbook['title']);