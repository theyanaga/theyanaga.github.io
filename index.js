// Have functions insde this one, otherwise they won't work.
$(document).ready(function() {
    $("#burger-icon").click(function(event) {
        $(".page-selector").addClass("click")
        $(".page-selector").show()
        $(".page-selector").css("display", "block")
        $(".page-selector").css("opacity", "1")
        $(".page-selector").css("visibility", "visible")
        event.stopPropagation();
    })

    $(document).click(function(event) {
        $(".page-selector").css("opacity", "0")
        $(".page-selector").hide()
    })
});

