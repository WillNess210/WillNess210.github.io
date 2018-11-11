$(function() {
	// IF ODD # PROJECTS, MAKE FIRST PROJECT TAKE UP 2 COLUMNS
	var projectCount = $(".project").length;
	if(projectCount % 2 == 1){
		$(".project").first().css("grid-column", "span 2");
	}
	// ANIMATE CONTACT BARS
	$(".contact").on("mouseover", function(){
		$(this).css("backgroundColor", "#606060");
	});
	$(".contact").on("mouseout", function(){
		$(this).css("backgroundColor", "#454545");
	});
	// CLICK ON WHOLE DIV
	$(".contact").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});
	$(".project").click(function() {
		if($(this).data("link")){
			window.location = $(this).data("link");
		}
	  return false;
	});
	// REMOVE MY NAME AFTER 5 SECONDS
	setTimeout(function(){
        $('#myname').slideToggle("slow");
    }, 5000);
});