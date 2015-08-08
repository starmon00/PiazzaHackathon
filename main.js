function run() {
	var json = $.getJSON('http://a.ashwinikhare.in:6060/getCourses', function(data){
		if (window.console) console.log(data);		
		

		//Create Table
		var table = $('<table>');





		$.each(data, function( index, value ) {
			//Create Row

			//Fill Row with Data
			//Append to Table
			if (window.console) console.log(value['estimatedClassWorkload']);		
			
		  	var div = $("<div>" +  "<img src='" + value['photo'] + "'>' <br>" + value['name'] + "<br> " + value['estimatedClassWorkload'] 
		  		+ "<br> " + value['service'] + " <br> " + value['shortName'] + " <br> " + value['shortDescription'] + "<br><br></div>");

			var photo = $("<img src='" + value['photo'] + "'>'")
			var name = $(value['name'] + "<br>")
			var estimatedClassWorkload = $(value['estimatedClassWorkload'])
			var service = $(value['service'])
			var shortName = $(value['shortName'])
			var shortDescription = $(value['shortDescription'])



			$("body").append(div);

		
		});
		
	});
}