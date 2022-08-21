$(".toggleButton").tooltip();

$(".toggleButton").hover(function() {
    $(this).addClass("highlightedButton");
}, function() {
    $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function() {
    $(this).toggleClass("active");
    $(this).toggleClass("highlightedButton");
})

$("textarea").on('change keyup paste', function() {
    $("iframe").contents().find("html").html($("#HTMLUserInput").val());
});

$(document).ready(function() {
    $("#htmlSectionToggle").click(function () {
        $("#HTML-input").toggle(1500, "easeoutQuint")
    });
});
