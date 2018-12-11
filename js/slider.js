var sliders = document.getElementsByClassName('slider');

var id = setInterval(switchSlide, 5000);

function switchSlide () {
    for (let slider of sliders) {
        i = 0;

        for (let slide of slider.children) {
            if (slide.style.flexGrow == "1") {
                break;
            }
            
            i++;
        }

        slider.children[i].style.flexGrow = "0";
        slider.children[(i + 1) % slider.children.length].style.flexGrow = "1";
    }
}