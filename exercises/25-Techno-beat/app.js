
let lyricsGenerator = (arr) => {
     let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && arr[i] === arr[i + -1] && arr[i + -1] === arr[i -2]) {
            newArr.push('Drop the base ')
            newArr.push('!!!Break the base!!! ')
        }       
        else if(arr[i] === 0) {
            newArr.push('Boom ')
        } else if (arr[i] === 1) {
            newArr.push('Drop the base ')
        }
    }
    return newArr.join('')
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))