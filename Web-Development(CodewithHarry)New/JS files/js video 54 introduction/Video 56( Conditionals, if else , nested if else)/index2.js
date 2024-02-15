
let age = 1;
if (age == 18) {
    console.log("You can drive car");
}
else if (age == 0) {
    console.log("Are you joking?")
}
else if (age == 1) {
    console.log("Are you joking again?")
}
else {
    console.log("You can not drive")
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
/*
translate to:
if(a>b){
    let c = a - b;
}
else{
    let c = b - a;
}
*/
