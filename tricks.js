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
        $("#d_matrusp".fadeOut());
    });
    $("#ga13").hover(function(){
        $("#d_tccs").hide();
        $("#d_matrusp").hide();
        $("#d_grade").show();
    }, function(){
        $("#d_grade").fadeOut();
    });

    $("#ga21").hover(function(){
        $("#d_news").show();
        $("#d_acontece").hide();
        $("#d_colunas").hide();
    }, function(){
        $("#d_news").fadeOut();
    });
    $("#ga22").hover(function(){
        $("#d_news").hide();
        $("#d_acontece").show();
        $("#d_colunas").hide();
    }, function(){
        $("#d_acontece").fadeOut();
    });
    $("#ga23").hover(function(){
        $("#d_news").hide();
        $("#d_acontece").hide();
        $("#d_colunas").show();
    }, function(){
        $("#d_colunas").fadeOut();
    });

    $("#ga31").hover(function(){
        $("#d_pictures").show();
        $("#d_youtube").hide();
        $("#d_face").hide();
    }, function(){
        $("#d_pictures").fadeOut();
    });
    $("#ga32").hover(function(){
        $("#d_pictures").hide();
        $("#d_youtube").show();
        $("#d_face").hide();
    }, function(){
        $("#d_youtube").fadeOut();
    });
    $("#ga33").hover(function(){
        $("#d_pictures").hide();
        $("#d_youtube").hide();
        $("#d_face").show();
    }, function(){
        $("#d_face").fadeOut();
    });
});
