let list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];

let mergeTwoList = (array) => {
    let odd = [];
    let even = [];
    let merged = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            odd.push(array[i])
        } else if (array[i] % 2 === 0){
            even.push(array[i])
        }
    }
    merged.push(odd, even)
    return merged
}

console.log(mergeTwoList(list_of_numbers))