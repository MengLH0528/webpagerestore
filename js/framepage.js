$(document).ready(function(){
	window.onload = choosemeau;
	function choosemeau(){
		var parent = document.getElementById('head');
		var child = parent.getElementsByTagName("span");
		var iframe = document.getElementById('iframe');
		if ($('#iframe').attr("src") == "homepage.html") {
			child[0].style.cssText = "background: rgba(255,255,255,0.7);color: rgb(101,54,10);";
		}
	}

    $("#homepage").hover(function(){
        $("#cooperate").css("display","block");
    },function(){
	    $("#cooperate").css("display","none");
	});

    $("#head span").click(function(e){
    	var target = e.target;
    	var div1 = document.getElementById("head");
    	var companyinfo = document.getElementById("companyinfo");
	    var nodeList = div1.getElementsByTagName("span"); 
		for(var i=0; i<nodeList.length; i++)
		{
			if(target == nodeList[i]){
				target.style.cssText = "background: rgba(255,255,255,0.7);color: rgb(101,54,10);";
				if(i == 0){
					document.getElementById("iframe").src="homepage.html";
				}else if(i == 1){
					document.getElementById("iframe").src="brandandproduct.html";
				}else if(i == 4){
					document.getElementById("iframe").src="storeinformation.html";
				}else if (i == 3) {	
					document.getElementById("iframe").src="aboutus.html";
					companyinfo.style.cssText = "display: block;";
					break;
				}
			}else{
				nodeList[i].style.cssText = "background: null";
				companyinfo.style.cssText = "display: none;";
			}
		}
    });
    
});