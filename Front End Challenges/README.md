# Question 1:
1. 
	#firstDiv will be red, #secondDiv will be orange
2. 
```
document.getElementById('firstDiv').style = 'background-color:pink';
```
3.
```
	document.getElementById('secondDiv').classList.add('yellow-card'); 
```
(note div will still not be yellow as Id selector takes precedence)

# Question 2:
1. 
	Because the == operator does type coercion to which only checks value and not the type of a variable.

```
	function compareIt(num1, num2) {
	    return num1 === num2;
	}
```

# Question 3:
1. 
	Using css media queries.
  ```
	.firstDiv {
		width: 50%;
	}

	@media only screen and (max-width: 768px) {	 
    .firstDiv {		
      width:100%;		
    }
  }
```
2. 
	It reduces the number of HTTP requests that have to be done to retrieve the js needed to show the page.

3.
	You need to compile the sass with a sass compiler, the compiler will then convert your sass files into css for the browser to understand.
4.
	Include polyfills into your page 
  ```
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
  ```
