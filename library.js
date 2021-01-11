// ========================== forEach ===================== //


const numbers = [100, 50, 60, 30, 77]

function text() {
            console.log ('test')
        }
    
const alfonso = {}
    alfonso.each = (array,fn) => {
        for( let i = 0; i < array.length; i++){
            fn();
        }
    }
    
    alfonso.each(numbers, text)


// ============================ Filter ====================== //


const numbersTwo = [15, 30, 660, 50, 807, 69]

function testFilter(array,fn) {
       let otherArray = []
       for(let i = 0; i < array.length; i ++) {
           const callBack = fn(array[i]) 
           
           if (callBack){
               otherArray.push(array[i])
           }
       }
       return otherArray
    }
    
    function result (value) {
       return (value == 660)
    }
    
    console.log(testFilter(numbersTwo, result))


// ================================ Map =================================== //


const numbersTree = [80, 15, 5, 5] 

function testMap(array, fn){
            const secondArray = []
        for(let i = 0; i < array.length; i++) {
            secondArray.push(fn(array[i]))
        }
        return secondArray
    }
    
    function mapResult(value){
        return  (value * 5 == 25)
    }
    
    console.log(testMap(numbersTree, mapResult))


// ===================================== Find ======================================= //


const numbersFour = [76, 54, 30, 20]

function testFind(array, fn) {
    for (let i = 0; i < array.length; i ++) {
       if(fn(array[i]))
       return array[i]
   }
}

function findResult(value){
    return  (value / 20 === 1)
}

console.log(testFind(numbersFour, findResult))
    
// ===================================== FindIndex ======================================= //


const numbersFive = [60, 23, 12, 60, 50, 800, 70]

function testFindIndex(array, fn) {
   for(let i = 0; i < array.length; i ++) {
       if(fn(array[i])) {
           return i   
       }
   }
}

function resultFindIndex(value){
         return  (value / 2 == 400)
     }
    
    console.log(testFindIndex(numbersFive, resultFindIndex))


// ===================================== Contains ======================================= //


const numbersSix = [60, 23, 12]

function testContains (array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
        return true }
    else {return false}
  }
}

const containsResult = testContains(numbersSix, 40)

console.log(containsResult)


// ===================================== Pluck ======================================= //


const data =[
         {name: 'Jorge', age: 19, gender: 'Male'},
         {name: 'Georgina', age: 70, gender: 'Female'},
         {name: 'Martha', age: 30, gender: 'Female'},
         {name: 'Alfonso', age: 33, gender: 'Male'},
         {name: 'Julieta', age: 36, gender: 'Female'},
     ]

function testPluck(array, property) {
    const newData = [];
    for(let i = 0; i < array.length; i++){
        newData.push(array[i][property])
    }
    return newData
}

const resultPluck = testPluck(data, 'gender');

console.log(resultPluck)


// ===================================== Without ======================================= //


const names =['german', 'perla', 'pedro', 'mariana', 'pedro', 'german', 'jorge']

function testWithout (array, element) {
  const  values = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] != element) {
     values.push(array[i])}
    }
    return values
}


const resultWithout = testWithout(names, 'pedro')

console.log(resultWithout)