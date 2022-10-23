// Write a function that prints “Hello, World!” three times
function greetings ( ) {
	console.log("Hello, World!")
	console.log("Hello, World!")
	console.log("Hello, World!")
}
greetings ()

// Write a function that finds a perimeter of the rectangle given by two sides.
function perimeter (a,b) {
	let p = 2*(a+b)
	console.log(p)
}
perimeter(5,2)

// Write a function that finds an area of a circle given its radius
function area (radius) {
	let A = 3.14 * radius * radius
	console.log(A)
}
area(10)

// Write a function that greets a person by his/her name 
function more_greetings (name) {
	console.log("Hi, ", name, "!")
}
more_greetings("Sarah")

//  Write a function that returns the ratio of two given numbers.
function ratio(a,b) {
	let r = a/b
	console.log(r)
}
ratio(50,5)

//	Write a function that returns the sum of squares of two given numbers.
function SS(a,b) {
	let x = a*a + b*b
	console.log(x)
}
SS(4,3)

//	Write a function that returns the product of three given numbers.
function PPP(a,b,c) {
	let x = a*b*c
	console.log(x)
}
PPP(4,2,8)

//	Write a function to convert dollars to tenge.
function converter (dollars) {
	let tenge = dollars * 469.34
	console.log(tenge)
}
converter(2)

//	Write a function to check whether a given number is positive or negative.
function positive (number) {
	if (number>0) {console.log(number+' is positive')} 
	if (number<0) {console.log(number+' is negative')} 
}
positive (5)

//	Write a function to check whether two given numbers are equal or not.
function equality (a,b) {
	if (a==b) {console.log('The numbers are equal')}	
	else {console.log('The numbers are different')} 
}
equality (5,6)

//	Write a function to check whether a given number is even or odd.
function even (number) {
	if (number%2==0) {console.log(number+' is even')}	
	else {console.log(number+' is odd')} 
}
even (5)

//	Write a function to check whether a given number is between 0 and 1.
function small (number) {
	if (number>0 & number<1) {console.log(number+' is between 0 and 1')}
		else {console.log(number+' is not between 0 and 1')}
}
small(0.4)

//	Write a function that returns the greatest among the given two numbers.
function compare (a,b) {
	if (a>b) {console.log(a+' is greater than '+b)}
		else if (b>a) {console.log(b+' is greater than '+a)}
			else {console.log('The numbers are equal')}
}
compare(0,4)

//	Write a function that returns the greatest among the given three numbers.
function compare (a,b,c) {
	if (a>b) { 
		if (a>c) {console.log(a+' is the greatest integer')}
		else {console.log(c+' is the greatest integer')}
	} 
	else {
		if (b>c) {console.log(b+' is greatest integer')}
		else {console.log(c+' is the greatest integer')}
		}
	}

compare(1,1,8)

//	Write a function that returns the day of the week by its numbers.
function week (day) {
	if (day==1) {console.log('Monday')}
		else if (day==2) {console.log('Tuesday')}
			else if (day==3) {console.log('Wednesday')}
				else if (day==4) {console.log('Thursday')}
					else if (day==5) {console.log('Friday')}
						else if (day==6) {console.log('Saturday')}
							else {console.log('Sunday')}
}
week(4)
