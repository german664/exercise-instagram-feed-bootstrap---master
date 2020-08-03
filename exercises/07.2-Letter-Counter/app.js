let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
var repeats=[];

for(x = 0, length = par.length; x < length; x++) {
    var l = par.charAt(x)
    counts[l] = (isNaN(counts[l]) ? 1 : counts[l] + 1);
}



console.log(counts);