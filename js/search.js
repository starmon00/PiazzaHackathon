function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function post() {
	//replace var json = xxx with the below code later
	$.post( "url.html", { keyword: getURLParameter('key'), level: getURLParameter('level'), hours: getURLParameter('hours')}, function( data ) {
		//table data goes here
	});
}

function run() {
	var json = $.getJSON('http://a.ashwinikhare.in:6060/getCourses', function(data){
		if (window.console) console.log(data);		
		

		//Create Table
		var table = $('<table>');
		$("body").append(table);




		$.each(data, function( index, value ) {
			//Create Row
			//Fill Row with Data
			//Append to Table
			if (window.console) console.log(value['estimatedClassWorkload']);		
			
			/*
		  	var div = $("<div>" +  "<img src='" + value['photo'] + "'>' <br>" + value['name'] + "<br> " + value['estimatedClassWorkload'] 
		  		+ "<br> " + value['service'] + " <br> " + value['shortName'] + " <br> " + value['shortDescription'] + "<br><br></div>");
			*/
			$("body").append('<tr>');


			var photo = $("<img src='" + value['photo'] + "'>'");
			var service = $(value['service']);

			$("body").append('<td>' + photo + ' ' + service + '</td>');


			var name = $(value['name'] + "<br>");
			var shortDescription = $(value['shortDescription']);

			$("body").append('<td>' + name + ' ' + shortDescription + '</td>');



			var estimatedClassWorkload = $(value['estimatedClassWorkload']);

			$("body").append('<td>' + estimatedClassWorkload + '</td>');


			$("body").append('</tr>');

		
		});

		$("body").append('</table>');
	});
}