var index = 0;

setInterval(function() {
    var img = []

    img[0] = "./assets/img/slide/slider_1.webp"
    img[1] = "./assets/img/slide/slider_2.webp"

    document.querySelector(".slider-img").src = img[index]
    index++
    if(index > img.length - 1 ) {
        index = 0
    }

},1000)
