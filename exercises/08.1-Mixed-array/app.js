var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let mix2 = [];
let tipoDe = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        mix2.push(typeof arr[i])
    }
}
tipoDe(mix)
console.log(mix2)