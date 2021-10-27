// Get button element by it's ID
var btn = document.querySelector('#calculate');

// Bind a 'click' event to the button.
btn.addEventListener ('click', function () {
	// Number(<value>): Convert any <value> into Number (Float or Integer):
	// see also: parseInt (<value>) => Convert any <value> into integer.
	// 					 parseFloat (<value>) => Convert any <value> into float.
	var num1 = Number ( document.querySelector('#num1').value ),
			num2 = Number ( document.querySelector('#num2').value ),
			num3 = Number ( document.querySelector('#num3').value ),
			num4 = Number ( document.querySelector('#num4').value ),
			num5 = Number ( document.querySelector('#num5').value ),
			num6 = Number ( document.querySelector('#num6').value ),
			num7 = Number ( document.querySelector('#num7').value ),
			num9 = Number ( document.querySelector('#num9').value ),
			// The Element to show result in
			rlt = document.querySelector('p.answer');




	var a = num1 * num2;
	var b = num1 + num2 + num3 + num4 + num5;
	var c = b / (1-0.5);
	var e = c - b;



	document.getElementById("num3").value = a;
	document.getElementById("num6").value = b;
	document.getElementById("num7").value = c;
	document.getElementById("num9").value = e;
	
	// Get a checked radio/option button's value.
	// input => tag name.
	// [name="method"] => tag's attribte name and value.
	// :checked => pseudo rule, only find element with checked state.
	// .value => to get a value of that input.
	var answer = e;
	
	
	// Set content of HTML element.
	rlt.innerHTML = answer;
});
