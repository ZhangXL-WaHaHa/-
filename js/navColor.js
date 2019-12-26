$("a").mouseover(function(){
	$(this).removeClass("white");
	$(this).addClass("yellow");
})
$("a").mouseout(function(){
	$(this).removeClass("yellow");
	$(this).addClass("white");
})