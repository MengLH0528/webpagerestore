$(document).ready(function(){
	$("#firstfood").hover(function(){
        $("#foodintroduce").css("display","block");
        $("#foodintroduce").css("z-index","9999");
        $("#delicious").css("color","rgb(238,113,37)");
    },function(){
	    $("#foodintroduce").css("display","none");
	    $("#foodintroduce").css("z-index","0");
	    $("#delicious").css("color","black");
	});
});