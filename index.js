let iteration = 0

do {
  console.log(iteration)
  iteration += 49
} while (iteration < 100)

for (let index = 2; index <= 100; index *= 2) {
  console.log(index)
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 3; index < numbers.length ; index++) {
  const element = numbers[index]
  console.log(element)
}



let input = 7
let factorial= 1
for (let i=0 ; i < input ; i++){
  factorial = factorial*(input-i)
}
console.log(factorial)
  
let input2 = 7
let factorial1 = 1 

for (let i=input2 ; i > 0 ; i--){
  factorial1 *= i
}
  console.log(factorial1)

let inputName = 'nico'
let outputName = ''

for(let i = inputName.length - 1 ; i >= 0 ; i--){
  outputName = outputName + inputName[i]
}
console.log(outputName)








  



