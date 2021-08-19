function updateCase(product, price, isIncreasing,) {
	const productInput = document.getElementById(product + '-number');
	let productNumber = productInput.value;
	if (isIncreasing == true) {
		productNumber = parseInt(productNumber) + 1;
	}
	else if (productNumber > 0) {
		productNumber = parseInt(productNumber) - 1;
	}
	//  new case Number er jony var use korer joy const er poribite ler use korte hobe 

	productInput.value = productNumber;


	// update  total 

	const productTotal = document.getElementById(product + '-total');
	productTotal.innerText = productNumber * price;

	// calculated 
	calculated();
}

function getInputValue(product) {
	const productInput = document.getElementById(product + '-number');
	const productNumber = parseInt(productInput.value);
	return productNumber;
}

function calculated() {
	// const phoneInput = document.getElementById('phone-number');
	// const phoneNumber = parseInt(phoneInput.value);
	const phoneTotal = getInputValue('phone') * 1219;
	const caseTotal = getInputValue('case') * 59;
	const subTotal = phoneTotal + caseTotal;
	const tax = subTotal / 10;
	// update on th html 
	document.getElementById('sub-total').innerText = subTotal;
	document.getElementById('tax-amount').innerText = tax;
	document.getElementById('total-price').innerText = subTotal + tax;
}



// phone plas button 
document.getElementById('phone-plas').addEventListener('click', function () {
	// const phoneInput = document.getElementById('phone-number');
	// let productNumber = phoneInput.value;
	// phoneInput.value = parseInt(productNumber) + 1;
	updateCase('phone', 1219, true)
})

// phone minus button 
document.getElementById('phone-minus').addEventListener('click', function () {
	updateCase('phone', 1219, false);
})

// case plas button 

document.getElementById('case-plas').addEventListener('click', function () {
	// const caseInput = document.getElementById('case-number');
	// const caseNumber = caseInput.value;
	// caseInput.value = parseInt(caseNumber) + 1;
	updateCase('case', 59, true);

});

// case minus button 

document.getElementById('case-minus').addEventListener('click', function () {
	// const caseInput = document.getElementById('case-number');
	// const caseNumber = caseInput.value;
	// caseInput.value = parseInt(caseNumber) - 1;
	updateCase('case', 59, false);
});

