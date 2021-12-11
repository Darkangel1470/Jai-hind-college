const option = $(".options");
const optionsdiv = $(".optionsdiv");
const navlist = $(".optionsdiv ul");
const optionimg = $(".optionsdiv img");

navlist.hide();
    optionsdiv.mouseover(function() {
        optionimg.slideUp(100, function() {
            navlist.slideDown(200);
        })
    });
    optionsdiv.mouseleave(function() {
        navlist.slideUp(200, function() {
            optionimg.fadeIn(100)
    })
});
