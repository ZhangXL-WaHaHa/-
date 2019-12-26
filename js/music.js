var music = document.getElementById("music");
$(".iconfont").click(function(){
if(this.style.webkitAnimationPlayState == "running" ){
	this.style.webkitAnimationPlayState = "paused";
	music.pause();
}else{
	this.style.webkitAnimationPlayState = "running";
	music.play();
	}
})