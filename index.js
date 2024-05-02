let numberX = 10;
let numberY = '20';

console.log(numberX == numberY); // true (lygu)
console.log(numberX === numberY); // false (griežtai lygu)
console.log(numberX != numberY); // false (nelygu)
console.log(numberX !== numberY); // true (griežtai nelygu)
console.log(numberX > numberY); // false (daugiau nei)
console.log(numberX >= numberY); // false (daugiau arba lygu)
console.log(numberX < numberY); // true (mažiau nei)
console.log(numberX <= numberY); // true (mažiau arba lygu)

console.log((numberX != numberY) ? 'It is true' : 'It is false'); // It is false