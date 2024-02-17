// function nice(name ){
// console.log("hey " + name +" you are very intelligent")
// console.log("hey " + name +" you are very good")
// console.log("hey " + name +" you are very awsome")
// console.log("hey " + name +" you are very very smart")
// console.log("hey " + name +" you are very best")
// }

// nice("Naru")
// nice("Harry")
// console.log("hey naru you are very intelligent")
// console.log("hey naru you are very good")
// console.log("hey naru you are very awsome")
// console.log("hey naru you are very very smart")
// console.log("hey naru you are very best")

function sum(a, b, c = 6) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

result1 = sum(3, 5)
result2 = sum(4, 7)
result3 = sum(6, 9, 1)

console.log("The sum of these number is: ", result1)
console.log("The sum of these number is: ", result2)
console.log("The sum of these number is: ", result3)

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}
func1(51)
func1(78)
func1(64)