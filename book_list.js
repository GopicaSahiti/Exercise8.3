"use strict";
$(document).ready(function(){
	$("#categories h2, a ").each(function(){
		var booklist = new Image();
		booklist.src = $(this).attr("href");
	});
		
		$("#categories h2, a ").click(function(evt){
			var linkURL = $(this).attr("href");
			$("#image").attr("src",linkURL);
			
			$(this).toggleClass("minus");
			if($(this).attr("class") !== "minus"){
				$(this).next().hide();
			}
			else {
				$(this).next().show();
			}
			evt.preventDefault();
		});
		$("#categories h2, a ").find().focus();
	});
		