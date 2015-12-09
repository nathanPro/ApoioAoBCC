$(window).load(function() {
    $(".academic_cover").hover(function(){
        $("#da1").fadeIn();
    }, function(){
        $("#da1").fadeOut();
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
        $("#d_matrusp").show();
        $("#d_grade").hide();
    }, function(){
    });
});
