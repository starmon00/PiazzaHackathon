function inputValue (newValue) {
	document.getElementById("range").innerHTML=newValue;
} 


function submit() {

	$('#submit').click(function() {
		var key = $("#keyword").val();
		var level = $("#level option:selected" ).text();
		var time = $("#range").text();
		window.location = 'searchResult.html?key=' + key +  '&level=' + $.trim(level)  + '&time=' + time;		
	});
	
}
