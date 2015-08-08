function inputValue (newValue) {
	document.getElementById("range").innerHTML=newValue;
} 

function submit() {
	var key = $("#keyword").val();

	if (key == '') {
		alert('Please enter a keyword to search for!');
	} else {
		var level = $("#level option:selected" ).text();
		var time = $("#range").text();
		window.location = 'searchResult.html?key=' + key +  '&level=' + $.trim(level)  + '&time=' + time;	
	}	
}


function bindSubmit() {
	$('#keyword').keypress(function (e) {
	  if (e.which == 13) {
	    submit();
	    return false;    //<---- Add this line
	  }
	});

	$('#submit').click(submit);

}



