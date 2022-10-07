$(function() {

    this.$spookyBtn = $('#halloween');

    this.$spookyBtn.click(function(e) {

        $('.container-fluid').css('background-color', "#FF7518");
        $('#features').css('background-color', "#000");
        $('#footer').css("background-color", "#FF7518");
        $('h1.big-heading').css("color", "#000");
        
        $('h1.big-heading').text('Watch Out!');
		$('#appName').css("background-color", "#000");
        $('#appName').css("color", "#FF7518");
        $('#title-fact').css("color", "#000");
        $('h3.feature-title').css("color", "#fff");
	    $('.feature-p').text("So easy its scary!"); 
        $('.feature-title').text("Frightening Fun!");
        $(".fas").attr("class", "fas fa-ghost fa-7x"); 
        $(".fa-ghost").css("color", "#FF5733");
	$('#halloween').css("visibility", "hidden");
	$(".fa-ghost").mouseenter(function() {
            $(this).css("color", "#fff");
        });
        
        $(".fa-ghost").mouseleave(function() {
            $(this).css("color", "#FF5733");
        });
	    
        $('#dog-image').fadeTo(1500, 0.0, function() {
            $('#dog-image').attr("src", 'images/spooky dog.jpeg');
            $('#dog-image').fadeTo(1, 1);
        });

        $('#halloween').fadeTo(1000, 0.0, function() {
            $('#halloween').attr("class", "btn btn-light btn-lg");            
            $('#halloween').fadeTo(500, 1);
        })

        $('#title-btn').fadeTo(1000, 0.0, function() {
            $('#title-btn').attr("class", "btn btn-dark");
            $('#title-btn').fadeTo(500, 1);
            $('#tooScary').attr('display', 'block');
            $('#tooScary').fadeTo(500, 1);
    
        })
        
        $('#title-btn').click(function(e) {
            
            $('#spookyFact').attr('display', 'block');
            $('#title-fact').hide();
            $('#spookyFact').fadeTo(500, 1);

            let spookyFact = new Array(5);

            spookyFact[0] = "Dogs can hear things we can't....";
	        spookyFact[1] = "Dogs are able to detect diseases in people...";
            spookyFact[2] = "Dogs may see things we can't...";
	        spookyFact[3] = "Dogs can sometimes sense natural disasters...";
            spookyFact[4] = "Dogs may feel a presense we can't see..";

            	
	        index = Math.floor(Math.random() * spookyFact.length);
	
	        document.getElementById('spookyFact').innerHTML = spookyFact[index];
            
        });


        $('#tooScary').click(function() {
            location.reload(true);
        });

        
        

    })

});
