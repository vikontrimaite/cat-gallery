function upDate(element) {
    document.getElementById('mainBox').innerHTML = element.alt;

    document.getElementById('mainBox').style.background = "url('"+element.src+"')";
}

function unDo() {
    document.getElementById('mainBox').innerHTML = "Hover here again to reveal cat's name!";

    document.getElementById('mainBox').style.backgroundImage = "url('')";
}

