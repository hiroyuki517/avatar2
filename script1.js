"use strict";

$(function(){

    $("#thumbs img").click(function(){
        let indexNum = $(this).parent().index();

        //モーダルの表示とコンテンツのリセット
        $("#modal-wrapper").fadeIn(300);
        $("#left-side li").hide();
        $("#title li").hide();
        $("#text li").hide();

        $("#main-image").children().eq(indexNum).addClass("vision");
        $("#title").children().eq(indexNum).addClass("vision");
        $("#text").children().eq(indexNum).addClass("vision");

        $("#main-image .vision").fadeIn(500);
        $("#right-side .vision").slideDown(1000);
    });

    $("#modal-wrapper").click(function(){
        $(this).fadeOut(300);
        $(".vision").removeClass("vision");
    });

});
