function run() {
	var json = $.getJSON('http://a.ashwinikhare.in:6060/getCourses', function(data){
		if (window.console) console.log(data);		
		
		$.each(data, function( index, value ) {
			
			if (window.console) console.log(value['estimatedClassWorkload']);		
			
		  	var div = $("<div>" +  "<img src='" + value['photo'] + "'>' <br>" + value['name'] + "<br> " + value['estimatedClassWorkload'] + "<br> " + value['service'] + " <br> " + value['shortName'] + " <br> " + value['shortDescription'] + "<br><br></div>");
			$("body").append(div);
		
		});
	});
}