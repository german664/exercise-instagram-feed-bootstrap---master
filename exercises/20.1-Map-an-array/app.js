var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
    
    let farValues = (value / 5) * 9 + 32;
	//Divide by 5, then multiply by 9, then add 32
	return farValues
});

console.log(arrayOfFahrenheitValues);

