var syllabus = $(".syllabus");
var wdp = $(".wdp");
var oop = $(".oop");
var dbms = $(".dbms");
var la = $(".la");
var oa = $(".oa");
var cs = $(".cs");
var french = $(".french");
var simg = $("#simg1");
var subdiv = $(".subjectsdiv");

syllabus.hide();

subdiv.click(function() {
    syllabus.slideUp(500);
    setTimeout(function() {

        syllabus.slideDown("fast");
    },500)

    $(".subjectsdiv").animate({
        "borderTopWidth": "0px",
        "borderLeftWidth": "0px",
        "borderBottomWidth": "5px",
        "borderRightWidth": "5px"
    }, "fast")
    $(this).animate({
        "borderTopWidth": "5px",
        "borderLeftWidth": "5px",
        "borderBottomWidth": "0px",
        "borderRightWidth": "0px"
    }, "fast")
})
wdp.click(function() {
    // simg.attr("src","img\SEM_I_FYBVOC_SD_page-0003.jpg");
    setTimeout(function() {
        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0009.jpg").fadeIn();
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0010.jpg");
        $("#simg3").attr("src","img\\SEM_I_FYBVOC_SD_page-0011.jpg");
        $("#simg4").attr("src","img\\SEM_I_FYBVOC_SD_page-0012.jpg");
        $("#simg5").attr("src","img\\SEM_I_FYBVOC_SD_page-0013.jpg");
        $("#simg6").hide()
        $("img").attr("width","100%");

    },500)
})
oop.click(function() {
    setTimeout(function() {
        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0020.jpg").slideDown();
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0021.jpg").show();
        $("#simg3").attr("src","img\\SEM_I_FYBVOC_SD_page-0022.jpg").show();
        $("#simg4").attr("src","img\\SEM_I_FYBVOC_SD_page-0023.jpg").show();
        $("#simg5").hide()
        $("#simg6").hide()
        $("img").attr("width","100%");
    },500);
})
dbms.click(function() {
    setTimeout(function() {
        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0003.jpg");
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0004.jpg");
        $("#simg3").hide()
        $("#simg4").hide()
        $("#simg5").hide()
        $("#simg6").hide()
        $("img").attr("width","100%");

    },500);
})
la.click(function() {
    setTimeout(function() {

        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0014.jpg");
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0015.jpg");
    
        $("img").attr("width","100%");
    },500);
})
oa.click(function() {
    setTimeout(function() {
        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0007.jpg");
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0008.jpg");
        $("img").attr("width","100%");

    },500);
})
cs.click(function() {
    setTimeout(function() {
        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0003.jpg");
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0004.jpg");
        $("img").attr("width","100%");

    },500);
})
french.click(function() {
    setTimeout(function() {

        $("#simg1").attr("src","img\\SEM_I_FYBVOC_SD_page-0005.jpg");
        $("#simg2").attr("src","img\\SEM_I_FYBVOC_SD_page-0006.jpg");
        $("img").attr("width","100%");
    },500);
})
