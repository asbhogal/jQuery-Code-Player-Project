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