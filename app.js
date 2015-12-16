var clickCount = 0;

//document.ready with all the listeners
$(document).ready(function(){
	//create Generate Button
	$('#container').append("<button class='generate'>Generate</button>");
	
	//Create a display for clickCount (note: I could not get this to work properly and display anything other than 0... so I moved the click count into the generated rows)
	// $('#container').append("<p>Clicks: " + clickCount + "</p>")

	//call clickCounter on each Generate click:
	$('.generate').on('click', clickCounter); 

	//call appendDOM when you click Generate:
	$('#container').on('click', '.generate', appendDOM);

	//call functions on change and delete buttons
	$('#container').on('click', '.delete', deleteContainer);
	$('#container').on('click', '.change', changeContainer);


});	

//function to increase clickCount variable on each Generate click
function clickCounter(){
	clickCount++;
	// console.log(clickCount);
	// return clickCount;
};


//function to appendDom with new divs containing Delete and Change buttons with each Generate click:
//and to count clicks:
function appendDOM(){
	$("#container").append("<div class='normal'></div>")
	var $el = $("#container").children().last();
	
	$el.append("<p>Clicks: " + clickCount + "</p>");
	$el.append("<button class='delete'>Delete</button>");
	$el.append("<button class='change'>Change</button>");
};


//function to remove the container with that delete button on click
function deleteContainer(){
	$(this).parent().hide();
};

//function to change the color of the container to yellow when change is clicked
function changeContainer(){
	$(this).parent().toggleClass("changed");
};



