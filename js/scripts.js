//Create a "close" button and append it to each list item. 
var myNodelist = document.getElementByTagname("LI");
var i; //declaring variable i, can also be done inside for loop.
for(i=0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");	//creates a span element, places in var span
	var txt = document.createTextNode("\u00D7"); //creates a text node, places in var txt 
	span.className = "close"; //creates a class of .close for the span element
	span.appendChild(txt); //appends the TextNode to the span element. 
	myNodelist[i].appendChild(span); //for every list item[i], we append the span element.
}

//Click on a close button to hide the current list item
var close  = document.getElementByClassName("close"); //creates var that targets the '.close' class
var i; //declare our i var for our loop, once again we can place this inside the loop itself.
for(i = 0; i < close.length; i++) {
	close[i].onclick = function() {  
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul"); //returns the first element within the .document object of "unorder list", and defines this within var "list" 
list.addEventListener("click", function(ev) {  //Attached this selection to an eventListener that performs, when clicked, a function w/ e event parameter... 
	if(ev.target.tagName === "LI") {	//the event will 
		ev.target.classList.toggle("checked");
	}
}), false;

//Create a new list item when clicking on the "Add" button
function newElement() {
	var li = document.createElement("li"); //creates a var for each list item.
	var inputValue = document.getElementByID("myInput").value; //selects the id="#myInput" and returns its value and sets it to the var inputValue.
	var t = document.createTextNode(inputValue); //inserts the user input within a text node, and places this within a variable 't'
	li.appendChild(t); //append the the data within the text node and appends this to a new list item.
	if(inputValue === ' ') {  //if user input is empty when clicking the add button....
		alert("You must write something");  //...alert 		
	} else 
	{ 
		document.getElementByID("myUL").appendChild(li);
	}
	document.getElementByID("myInput").value = "";

	var span = document.createElement("SPAN");  //span && txt are local variables thats why they can be stated twice within seperate functions
	var txt = document.createTextNode("\u00D7"); //we're using a similair method for creating a button, as we did for the 'close' button.
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for(i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}