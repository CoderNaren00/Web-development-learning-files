let X = [1, 13, 5, 14, 6];
// let newX = []
// for (let index = 0; index < X.length; index++) {
// const element = X[index];
// newX.push(element**2)
// // }
// let newX = X.map((e, index, X)=>{
//     return e**2
// })

// console.log(newX)
// const greaterThanSeven = (e)=>{
//     if (e>7){
//         return true
//     }
//     return false
// }
// console.log(newX.filter(greaterThanSeven))

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a * b
}
console.log(arr2.reduce(red))
