'use strict';

let inputOne = document.querySelector('[data-element="input-one"]');
let inputTwo = document.querySelector('[data-element="input-two"]');
let buttonSum = document.querySelector('[data-element="button-sum"]');


buttonSum.addEventListener('click', () => {
	let result = (Number(inputOne.value) + Number(inputTwo.value)).toFixed(1);
	alert(result);
})
