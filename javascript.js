//1)array Manipulation
let flower=["Rose","Dandelion","Daisy","Jasmine"];
console.log(flower);
//push
flower.push("lily");
console.log(flower);
//unshift
flower.unshift("Rose");
console.log(flower);
//shift
flower.shift("Rose");
console.log(flower);
//pop
flower.pop("Rose");
console.log(flower);

//2)array search
let fabric=["cotton","nylon","denim","wool"];
console.log(fabric);
//indexof
console.log(fabric.indexOf("denim"));
//includes
console.log(fabric.includes("silk"));


//3)array sorting
let arr=[26,2,54,56,46];
console.log(arr);
//sort
console.log(arr.sort());
//reverse
console.log(arr.reverse());
//find
console.log(arr.find(x=>x>50));

//4)array map
let array=[26,38,46,54,56];
console.log(array.map(n=>n+3));

//5)array filter
console.log(array.filter(x=>x>20));