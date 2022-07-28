function bulbonoff() {
    var image = document.getElementById('bulb');

    bValue = document.getElementById('onoff').value;
    if (bValue == "Off") {
        document.getElementById("onoff").value = "On";
        image.src = "light-bulb-off.png";
    } else {
        document.getElementById("onoff").value = "Off";
        image.src = "light-bulb-on.png";

    }
}

function mouseover() {
    var image = document.getElementById('light');
    image.src = "yellow-light.png"
}

function mouseout() {
    var image = document.getElementById('light');
    image.src = "green-light.png"
    setTimeout(redlight, 4000)

    function redlight() {
        var image = document.getElementById('light');
        image.src = "red-light.png"
    }
}

