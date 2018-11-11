$(function() {
	var projectCount = $(".project").length;
	if(projectCount % 2 == 1){
		$(".project").first().css("grid-column", "span 2");
	}
});