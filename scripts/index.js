$(document).ready(function () {
    $("#btn-add").on('click', function() {
        $(".container").append("<img src='./images/nastol.com_.ua-205446.jpg' alt=''>");
    });
    $("#btn-clear").on('click', function(){
        $("img").remove();
    })
    $("#btn-text").on('click', function() {
        $(".container").append("<p>я текст, а не картинка</p>")
    })
});