const arr=["https://www.jaihindcollege.com/media/images/picture_nw12.jpg",
                "https://www.jaihindcollege.com/media/images/picture_nw10.jpg",
                "https://www.jaihindcollege.com/media/images/picture_nw11.jpg"];

const prev = $(".prev");
const next = $(".next");
const img =$(".image img");
let i = 0;
prev.click(function() {
    if(i!=0) {
        i--;
    } else {
        i = arr.length-1;
    }
    img.attr("src",arr[i])
})
next.click(function() {
    if(i!=arr.length-1) {
        i++;
    } else {
        i = 0;
    }
    img.attr("src",arr[i])
})
