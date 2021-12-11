var container = $(".container");

var deleteimglink = "https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo.png";
var container = $('.container')
var addlist = $('.addlist');
var addlisthide = $('.addlisthide');
var addlistinput = $('.addlist input');
var addlistbtn = $('.addlistbtn');
var addlistbin = $('.addlistbin');

var additem = $('.additem');
var additemhide = $('.additemhide');
var additembtn = $('.additem button');
var additeminput = $('.additem input');

var tasklist = $('.tasklist');
var listitem = $('.listitem');
var listitemcheck = $('.listitem input');


addlist.click(
  function() {
      additemhide.slideUp("fast")
      additem.find('p').show().delay(1000);
      addlist.find("p").hide();
      addlist.animate({height:"70px"});
      addlisthide.slideDown();
     
      addlist.removeClass("hover");

    }
) 

addlisthide.hide();
additemhide.hide();



addlistbtn.click(()=>{
    container.append('<div class="list "><h3 class="mg-left-20">'+addlistinput.val()+' </h3><div class="tasklist mg-left-20">    </div><div class="additem hover"><p>➕ Add to list</p><input type="text" class="additemhide hidden" required colspan="2"><button class="btn additemhide hidden">Add list item</button><span class="additemhide hidden">🗑️</span></div></div>');
    additemhide.hide();
    addlistinput.val('');
})



additem.click(()=>{
    addlisthide.slideUp();
    addlist.find('p').show();
    addlist.animate({height: '40px'});
    additem.removeClass('hover').find('p').hide();
    additem.show();
    additemhide.slideDown();
});

additembtn.click(()=>{

    if(additeminput.val().length>0){

        tasklist.append('<div class="tasklist"><div class="listitem"><input type="checkbox"><p>'+additeminput.val()+'</p></div></div>').find('input').on('click', function() {
            $(this).parent('div').remove();
          });
        additeminput.val('');
        jQuery(function($) {
            listitemcheck.on('click', function() {
              $(this).parent('div').remove();
            });
          });
    } else {
        alert("Blank field cannot be added");
    }
})


jQuery(function($) {
    listitemcheck.on('click', function() {
      $(this).parent('div').remove();
    });
  });




