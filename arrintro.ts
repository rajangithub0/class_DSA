let arr: number[] = [10, 20, 30, 40, 50, 60];
let fruits: string[] = ['apple', 'orange', 'banana', 'lichi']
fruits.push('mango')

console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);


fruits.pop();
fruits.shift();
console.log(fruits[0]);
fruits.unshift('graps')
console.log(fruits[0]);

arr[3] = 100;
console.log(arr);




