//first Task (Numbers from 10 to 20)
let result = '';
let i = 10;

do{
    result += i + ', '
    i++;
} while (i < 20);
console.log(result + 'first Task')

//second Task (Square of Number)
for (let i = 10; i <= 20; i++){
    let squaresOfNumbers = i * i;
    console.log(squaresOfNumbers + ' second Task')
}

//third Task (multiplication table)
for (let i = 0; i <= 10; i++){
    const number = 7;
    let multiplicationTable = number * i;
    console.log(multiplicationTable + ' third Task')
}

//4-th Task
let j = 0;
let resultSumm = 0;

do{
    resultSumm += j
    j++
} while(j <= 15);
console.log(resultSumm + ' 4-th Task')

//6-th Task (arithmetic mean)
let arithmeticMean = 0;

for (let i = 0; i <=500; i++){
    if (i == 500){
        arithmeticMean = arithmeticMean / i;
    }
    else{
        arithmeticMean += i;
    }
}
console.log(arithmeticMean + ' 6-th Task')