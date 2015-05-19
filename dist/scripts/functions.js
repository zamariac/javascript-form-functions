function add(number1, number2) {
	var result = parseFloat(number1) + parseFloat(number2);
	console.log (result)
	return result
}

function subtract(number1, number2) {
	var result = parseFloat(number1) - parseFloat(number2);
	console.log (result)
	return result
}

function tax(subtotal,taxpercentage){
	var result= parseFloat(subtotal)* parseFloat(taxpercentage)/100;
	console.log (result)
	return result

}

function stringLength(string){
	if (string.length < 5){
		return "short string";
	}
	else if (string.length > 5 && string.length < 10){
		return "medium string";
	}	
	else if (string.length > 10){
		return "long string"
	}
	

}
