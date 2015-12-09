$(window).load(function() {
    $(".academic_cover").hover(function(){
        $("#da1").fadeIn();
    }, function(){
        $("#da1").fadeOut();
    });
    $(".blog_cover").hover(function(){
        $("#da2").fadeIn();
    }, function(){
        $("#da2").fadeOut();
    });
    $(".media_cover").hover(function(){
        $("#da3").fadeIn();
    }, function(){
        $("#da3").fadeOut();
    });
    $("#ga11").hover(function(){
        $("#d_tccs").show();
        $("#d_matrusp").hide();
        $("#d_grade").hide();
    }, function(){
        $("#d_tccs").fadeOut();
    });
    $("#ga12").hover(function(){
        $("#d_tccs").hide();
        $("#d_matrusp").show();
        $("#d_grade").hide();
    }, function(){
    });
    $("#ga13").hover(function(){
        $("#d_tccs").hide();
        $("#d_matrusp").hide();
        $("#d_grade").show();
    }, function(){
        $("#d_grade").fadeOut();
    });
});
