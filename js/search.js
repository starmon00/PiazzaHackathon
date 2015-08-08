function getURLParameter(sParam) {
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
	$.post( "http://a.ashwinikhare.in:6060/getCourses", { keywords: getURLParameter('key'), level: getURLParameter('level'), hours: getURLParameter('hours')}, function( data ) {

		console.log(data);
	});
}

function run() {
	var json = $.getJSON('http://a.ashwinikhare.in:6060/getCourses', function(data){
		if (window.console) console.log(data);		
		

		//Create Table
		var table = '<table id="results"><tr><th>Course</th><th>Description</th><th>Hours</th></tr>';

		$.each(data, function( index, value ) {
			//Create Row
			//Fill Row with Data
			//Append to Table
			if (window.console) console.log(value['estimatedClassWorkload']);		
			
			/*
		  	var div = $("<div>" +  "<img src='" + value['photo'] + "'>' <br>" + value['name'] + "<br> " + value['estimatedClassWorkload'] 
		  		+ "<br> " + value['service'] + " <br> " + value['shortName'] + " <br> " + value['shortDescription'] + "<br><br></div>");
			*/

			var photo = "<img src='" + value['photo'] + "' width='300px'>'";
			var service = value['service'];
			
			if (service == 'udacity'){
				service = "<img src= 'images/udacity.jpg' width='100px'>'";
			}

			else if (service == 'coursera') {
				service = "<img src= 'images/coursera2.jpg' width='100px'>'";
			}
			
			var tablecell1 = '<tr><td>'+ photo + ' ' + service + '</td>';			
			
			var name = '<h2>'+value['name'] + "</h2>";
			var shortDescription = value['shortDescription'];
			
			var tablecell2 = '<td>' + name + ' ' + shortDescription + '</td>';
			
			var estimatedClassWorkload = value['estimatedClassWorkload'];
			
			var tablecell3 = '<td>' + estimatedClassWorkload + '</td></tr>';

			table = table.concat(tablecell1, tablecell2, tablecell3);
		
		});

		table=table.concat('</table>');
		$("body").append(table);
	});
}