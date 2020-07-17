// import {play} from "./plot"

export const playButton = () => {
    const button = document.createElement("input")
    button.setAttribute("id", "play-button")
    button.setAttribute("class", "button")
    button.setAttribute("type", "button")
    button.setAttribute("value", "Play")

    document.getElementById("button-area").appendChild(button)

    document.addEventListener('click', function (event) {

        if (event.target.id !== 'play-button') return;

        event.preventDefault();
        button.value = "Speed Up"
        play();

    }, false);
}

export const resetButton = () => {
    const button = document.createElement("input")
    button.setAttribute("id", "reset-button")
    button.setAttribute("class", "button")
    button.setAttribute("type", "button")
    button.setAttribute("value", "Reset")

    document.getElementById("button-area").appendChild(button)

    document.addEventListener('click', function (event) {

        if (event.target.id !== 'reset-button') return;

        event.preventDefault();
        reset();

    }, false);
}

export const play = () => {
    // debugger
    var slider = document.getElementById("term-slider");
    var variable = document.getElementById('slider-current-term');
    const button = document.getElementById('play-button')

    slider.addEventListener('input', function (e) {
        variable.textContent = slider.value + "th Congress (" + (1787 + slider.value * 2) + " - " + (1787 + slider.value * 2 + 2) + ")";
    });

    var interval = setInterval(function () {
        slider.stepUp();
        slider.dispatchEvent(new Event('input'));
        if (slider.value == 116) {
            button.value = "Play"
            clearInterval(interval)
        };
    }, 400);
}

export const reset = () => {
    // debugger
    var slider = document.getElementById("term-slider");
    var variable = document.getElementById('slider-current-term');
    const button = document.getElementById('play-button')

    slider.addEventListener('input', function (e) {
        variable.textContent = slider.value + "th Congress (" + (1787 + slider.value * 2) + " - " + (1787 + slider.value * 2 + 2) + ")";
    });

    var interval = setInterval(function () {
        slider.stepDown();
        slider.dispatchEvent(new Event('input'));
        if (slider.value == 80) {
            clearInterval(interval)
        };
    }, 1);
}