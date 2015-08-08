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