$(function() {

    this.$spookyBtn = $('#halloween');

    this.$spookyBtn.click(function(e) {

        $('.container-fluid').css('background-color', "#FF7518");
        $('#footer').css("background-color", "#FF7518");
        $('h1.big-heading').css("color", "#000");
        $('#halloween').css("visibility", "hidden");
        
        $('h1.big-heading').text('Watch Out!');
        $('#appName').css("color", "#000");
        $(".fas").attr("class", "fas fa-ghost fa-7x"); 
        $(".fas").css("color", "#FF5733");       
        
        $(".fa-ghost").mouseenter(function() {
            $(this).css("color", "#fff");
        });
        
        $(".fa-ghost").mouseleave(function() {
            $(this).css("color", "#FF5733");
        });

        $('#halloween').fadeTo(1000, 0.0, function() {
            $('#halloween').attr("class", "btn btn-light btn-lg");            
            $('#halloween').fadeTo(500, 1);
            $('#tooScary').attr('display', 'block');
            $('#tooScary').fadeTo(500, 1);
        })


        $('#tooScary').click(function() {
            location.reload(true);
        });

        
        

    })

});
