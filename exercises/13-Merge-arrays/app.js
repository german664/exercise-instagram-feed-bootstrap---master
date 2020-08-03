var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArr = [];
    for (let i = 0; i < firstArray.length; i++) {
        newArr.push(firstArray[i]);
    }
    for (let j = 0; j < secondArray.length; j++) {
            newArr.push(secondArray[j])
        } 
    return newArr
}

console.log(mergeArrays(chunk_one, chunk_two));