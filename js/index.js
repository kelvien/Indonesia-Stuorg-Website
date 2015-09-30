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

	var newPadding = (parseInt($("#main_container").css("height")) - parseInt($("#main_content").css("height"))) / 3;
	$("#main_container").css("padding-top", newPadding);

	$(window).resize(function(){
		var newPadding = (parseInt($("#main_container").css("height")) - parseInt($("#main_content").css("height"))) / 3;
		$("#main_container").css("padding-top", newPadding);
		$("#navigator").affix({
		    offset: { 
		        top: function(){ return (this.top = $("#first_row").offset().top)-$(".navbar-fixed-top").height() }
		    }
		});
	});	

	$("#counter_start").appear();

	$(document.body).on('appear', function(e) {
	    $(".counter h3").counter({
			autoStart: true, // true/false, default: true
			duration: 4000, // milliseconds, default: 1500
			countFrom: 0,
			runOnce: true,// only run the counter once, default: false
			easing: "easeOutCubic", // easing effects
		});
	});
	
//  $('.bxslider').bxSlider({
//  	mode: 'vertical',
//    auto: true,
//    minSlides: 1,
//    responsive: true,
//    pager: false,
//    controls: false,
//    useCSS: false,
//    pause: 5000
//  });

  $("#contact").on("submit", function(e){
  	e.preventDefault();
  	var button = $(this).find("button");
  	button.button("loading");
  	var data = {
  				type: $("input[name='type']").val(),
		   		name: $("input[name='name']").val(),
		   		email: $("input[name='email']").val(),
		   		text: $("textarea[name='text']").val(),
		   	};
  	$.ajax({
        type     : "POST",
        url      : "php/contact.php",
        data	 : data,
        success  : function(data) {
            if(data == "success"){
            	$("#response").removeClass("error_text");
            	$("#response").addClass("success_text");
            	$("#response").html("<span class='fa fa-check'></span> Sent! We will get back to you soon :)");
            	$("form#contact").hide();
            }
            else{
            	button.button("reset");
            	$("#response").removeClass("success_text");
            	$("#response").addClass("error_text");
            	$("#response").html("<span class='fa fa-exclamation-circle'></span> Please fill in all information and try again");
            }
        }
    });
  });

	/*resources.php, fetching email*/

	/*$("li").on("click", function(){
		if($(this).find("a").attr("href")=="#first-tab"){
			var styles = {
		    "background": "url('media/gallery/campus_autumn.jpg')",
		    "min-height": "70%",
		    "background-repeat": "no-repeat",
		    "background-attachment": "fixed",
		    "background-position": "center 30%",
		    "-webkit-background-size": "cover",
		    "-moz-background-size": "cover",
		    "-o-background-size": "cover",
		    "background-size": "cover"
		    };
			$("#fourth_row").css(styles);
		}
		else{
			var styles = {
	      	"background": "url('media/gallery/jacktricestadium.jpg')",
	      	"min-height": "50%",
		  	"background-repeat": "no-repeat",
		    "background-position": "center center",
		    "-webkit-background-size": "cover",
		    "-moz-background-size": "cover",
		    "-o-background-size": "cover",
		    "background-size": "cover"
		    };
			$("#fourth_row").css(styles);
		}
	});*/

	/*ScrollTo*/
	$.scrollTo(0);
	$('#scrollDown').click(function(){
		$.scrollTo( '#first_row', 800 );
	});

	/*SET OFFSET SET OFFSET SET OFFSET, stahhhhp*/
	$("#navigator").affix({
	    offset: { 
	        top: $("#first_row").offset().top-$(".navbar-fixed-top").height()
	    }
	});

	/*IS IT VISIBLE */
	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

});

		/*CUSTOM FUNCTIONS */
		
		/*END OF CUSTOM FUNCTIONS*/
