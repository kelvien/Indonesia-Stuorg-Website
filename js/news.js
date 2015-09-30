//WHATCHU LOOKIN AT MY FRIEND? Ask me if you have question instead..

$(window).load(function() {
	var wow = new WOW(
	  {
	    boxClass: 'wow',      
	    animateClass: 'animated', 
	    offset: 0,
	    mobile: true      
	  }
	);
	wow.init();

	$("#navigator").affix({
	    offset: { 
	        top: this.top = $("#newsfeed").offset().top-$(".navbar-fixed-top").height()
	    }
	});

	$(window).resize(function(){
		$("#navigator").affix({
		    offset: { 
		        top: function(){ return (this.top = $("#newsfeed").offset().top)-$(".navbar-fixed-top").height() }
		    }
		});
	});	

	/*Fetch those email brow..*/
	//$(window).scroll(function() {
	//   if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
    //        console.log("End Of The Page true");
    //   }
	//});

});