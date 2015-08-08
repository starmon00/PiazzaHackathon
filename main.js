function run() {
	var json = $.getJSON('http://a.ashwinikhare.in:6060/getCourses', function(data){
		if (window.console) console.log('foo');		
		if (window.console) console.log(data);		
	});
}