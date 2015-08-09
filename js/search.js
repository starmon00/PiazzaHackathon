var getURLParameter = function getURLParameter(sParam) {
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
	var key = getURLParameter('key');
	var lvl = getURLParameter('level');
	var hrs = getURLParameter('time');
	// console.log(key);

	//replace var json = xxx with the below code later
	$.post( "http://a.ashwinikhare.in:6060/getCourses", { keywords: key, level: lvl, hours_week: hrs}, function( data ) {

		var filters = "<div id='filters'><div class='center'><div class='menu'><ul><li> Keyword: " + key + "</li><li>Level: " + lvl + "</li><li>Hours/week: " + hrs + "</li></ul></div></div></div><p>";
		$('body').append(filters);
		
		var parseddata = jQuery.parseJSON(data);
		
		if (parseddata.length == 0) {
			$('body').append("<table><tr><th>Course</th><th>Description</th><th>Hours</th></tr><tr><td colspan='3'><i>Sorry, no search results found.</i></td></tr></table>");
		} else {
		
			//Create Table
			var table = '<table id="results"><tr><th>Course</th><th>Description</th><th>Hours</th></tr>';

			$.each(parseddata, function( index, value ) {
				//Create Row
				//Fill Row with Data
				//Append to Table			
			
				var photo = "<img src='" + value['photo'] + "' width='300px'>'";
				var service = value['service'];
			
				if (service == 'udacity'){
					service = "<img src= 'images/udacity.jpg' height='50px'>'";
				}

				else if (service == 'coursera') {
					service = "<img src= 'images/coursera2.jpg' width='50px'>'";
				}
			
				var tablecell1 = '<tr class="clickable-row" data-url="' + value['link'] + '"><td>'+ photo + ' ' + service + '</td>';			
			
				var name = '<h2>'+value['name'] + "</h2>";
				var shortDescription = value['description'];
			
				var tablecell2 = '<td>' + name + ' ' + shortDescription + '</td>';
			
				var estimatedClassWorkload = value['workload'];
			
				var tablecell3 = '<td>' + estimatedClassWorkload + '</td></tr>';

				table = table.concat(tablecell1, tablecell2, tablecell3);
		
			});

			table=table.concat('</table>');
			$("body").append(table);
			
			$(".clickable-row").click(function() {
				// console.log('test');
				// console.log($(this));
				// console.log($(this).data('url'));
		        window.document.location = $(this).data('url');
		    });
		}
	});
}

// function run() {
// 	var json = $.getJSON('http://a.ashwinikhare.in:6060/getCourses', function(data){
// 		if (window.console) console.log(data);		
// 		
// 
// 	});
// }