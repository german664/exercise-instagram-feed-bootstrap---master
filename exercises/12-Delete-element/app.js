var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){  
    let newArr = [];

    people.forEach(function (item) {
         if (item != personName){
            newArr.push(item)
        }
    })
return newArr
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));