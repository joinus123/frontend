$(document).ready(function(){

	$(".left1").boxLoader({
	    direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "30%"
});

	$(".right1").boxLoader({
	    direction:"x",
	    position: "50%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "30%"
});


	$(".new12").boxLoader({
	     direction:"y",
	    position: "",
	    effect: "fadeIn",
	    duration: "0.5s",
	    windowarea: "0%"
});

	$("#your").boxLoader({
	    direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "3s",
	    windowarea: "50%"
});

	$(".mind").boxLoader({
	    direction:"y",
	    position: "100%",
	    effect: "none",
	    duration: "0.8s",
	    windowarea: "30%"
});

	$(".inn").boxLoader({
	    direction:"none",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "50%"
});

	$(".fadee").boxLoader({
	    direction:"none",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "2s",
	    windowarea: "1%"
});

	$(".creative").boxLoader({
	    direction:"y",
	    position: "",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "80%"
});

	$("#mode").boxLoader({
	    direction:"none",
	    position: "none",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
});



$("#mynewbox").boxLoader({
	     direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
});
$("#mynewbox2").boxLoader({
	     direction:"x",
	    position: "50%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
});
$("#mynewbox3").boxLoader({
	    direction:"y",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
});







	$(".up i").click(scroll);

});


function scroll(){

	$("html, body").animate({
        scrollTop: $(".boxes").offset().top
    }, {
    	queue: false,
    	duration: 1000});

}