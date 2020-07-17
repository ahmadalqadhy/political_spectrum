export const renderSlider = () => {
    const slider = document.createElement("div");
    slider.setAttribute("id", "slider-container");

    const sliderInput = document.createElement("input");
    sliderInput.setAttribute("id", "term-slider");
    sliderInput.setAttribute("type", "range");
    sliderInput.setAttribute("min", "80");
    sliderInput.setAttribute("max", "116");
    sliderInput.setAttribute("value", "80");
    sliderInput.setAttribute("step", "1");

    const sliderLabel = document.createElement("span");
    sliderLabel.setAttribute("id", "slider-current-term");
    sliderLabel.innerHTML = 80 + "th Congress (" + 1947 + " - " + 1949 + ")";;

    slider.appendChild(sliderInput);
    slider.appendChild(sliderLabel);
    document.getElementsByClassName("slidertest")[0].appendChild(slider);
}