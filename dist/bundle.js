/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! exports provided: playButton, resetButton, play, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playButton", function() { return playButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetButton", function() { return resetButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
// import {play} from "./plot"
var playButton = function playButton() {
  var button = document.createElement("input");
  button.setAttribute("id", "play-button");
  button.setAttribute("class", "button");
  button.setAttribute("type", "button");
  button.setAttribute("value", "Play");
  document.getElementById("button-area").appendChild(button);
  document.addEventListener('click', function (event) {
    if (event.target.id !== 'play-button') return;
    event.preventDefault();
    button.value = "Speed Up";
    play();
  }, false);
};
var resetButton = function resetButton() {
  var button = document.createElement("input");
  button.setAttribute("id", "reset-button");
  button.setAttribute("class", "button");
  button.setAttribute("type", "button");
  button.setAttribute("value", "Reset");
  document.getElementById("button-area").appendChild(button);
  document.addEventListener('click', function (event) {
    if (event.target.id !== 'reset-button') return;
    event.preventDefault();
    reset();
  }, false);
};
var play = function play() {
  // debugger
  var slider = document.getElementById("term-slider");
  var variable = document.getElementById('slider-current-term');
  var button = document.getElementById('play-button');
  slider.addEventListener('input', function (e) {
    variable.textContent = slider.value + "th Congress (" + (1787 + slider.value * 2) + " - " + (1787 + slider.value * 2 + 2) + ")";
  });
  var interval = setInterval(function () {
    slider.stepUp();
    slider.dispatchEvent(new Event('input'));

    if (slider.value == 116) {
      button.value = "Play";
      clearInterval(interval);
    }

    ;
  }, 400);
};
var reset = function reset() {
  // debugger
  var slider = document.getElementById("term-slider");
  var variable = document.getElementById('slider-current-term');
  var button = document.getElementById('play-button');
  slider.addEventListener('input', function (e) {
    variable.textContent = slider.value + "th Congress (" + (1787 + slider.value * 2) + " - " + (1787 + slider.value * 2 + 2) + ")";
  });
  var interval = setInterval(function () {
    slider.stepDown();
    slider.dispatchEvent(new Event('input'));

    if (slider.value == 80) {
      clearInterval(interval);
    }

    ;
  }, 1);
};

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/*! exports provided: renderDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDetails", function() { return renderDetails; });
var renderDetails = function renderDetails() {
  var purpose = document.createElement("h2");
  purpose.setAttribute("class", "title-message");
  purpose.innerHTML = "Background & Purpose";
  var purposeBody = document.createElement("div");
  purposeBody.setAttribute("class", "body-message");
  purposeBody.innerHTML = "Every year, it seems that our country and politcs \n    become more and more divided. Heated rhetoric is often times used not to discuss\n    tangible issues in society but rather to fire up an official's constinuents.\n    Unfortunately rhetoric tends to evolve into policy and idealogy that influences\n    how Congressmembers introduce and vote on bills. The purpose\n    of this graph is to present an unbiased evolution of division that Congress has\n    come to adopt since the 80th congress of 1947.";
  var interpretation = document.createElement("h2");
  interpretation.setAttribute("class", "title-message");
  interpretation.innerHTML = "Calculation & Interpretation";
  var interpretationBody = document.createElement("div");
  interpretationBody.setAttribute("class", "body-message");
  interpretationBody.innerHTML = "Every point on this graph represents a member of Congress.\n    Each Congress Member is assigned 2 values (x, y) ranging between -1 and 1 which represent \n    a mix of ideology and voting history. The horizontal (x) axis denotes traditional socioeconmic \n    policy, often times refered to as \"economic left\" and \"economic right\". The vertical axis\n    represents social issues and stances independent of economics. The (x, y) values for each\n    Congress Member were computed using the NOMINATE scale system which analyzes voting history,\n    courtesy of UCLA's Politcal Science Department. The slider can be used to change the Congressional term.\n    Hovering over a point on the graph will show the Congress Member's name, and clicking on the\n    point will reveal more information about the member";
  document.getElementsByClassName("message")[0].appendChild(purpose);
  document.getElementsByClassName("message")[0].appendChild(purposeBody);
  document.getElementsByClassName("message")[0].appendChild(interpretation);
  document.getElementsByClassName("message")[0].appendChild(interpretationBody);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plot.js */ "./src/plot.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./src/details.js");


document.addEventListener("DOMContentLoaded", function () {
  Object(_plot_js__WEBPACK_IMPORTED_MODULE_0__["render"])();
  Object(_details__WEBPACK_IMPORTED_MODULE_1__["renderDetails"])();
});

/***/ }),

/***/ "./src/plot.js":
/*!*********************!*\
  !*** ./src/plot.js ***!
  \*********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./points */ "./src/points.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/button.js");



var render = function render(value) {
  //Congressional term and members
  var currentTermDataset = [];
  var currentTerm = value || 80;
  congressData.forEach(function (el) {
    if (el.congress === currentTerm) currentTermDataset.push(el);
  });
  var data = currentTermDataset; // Scatter plot properties

  var marginLeft = 100;
  var marginRight = 100;
  var marginTop = 100;
  var marginBottom = 100;
  var outerWidth = 800;
  var outerHeight = 800;
  var innerWidth = outerWidth - marginLeft - marginRight;
  var innerHeight = outerHeight - marginTop - marginLeft; //Create SVG and assign width and height

  var svg = d3.select("#scatter").append("svg").attr("width", outerWidth).attr("height", outerHeight); // actual plot will live within SVG as a g element 

  var g = svg.append("g").attr("id", "actual-plot").attr("transform", "translate(" + marginLeft + "," + marginTop + ")"); // Create Scales for X and Y

  var xScale = d3.scaleLinear().domain([-1, 0, 1]).range([0, innerWidth / 2, innerWidth]);
  var yScale = d3.scaleLinear().range([0, innerHeight]).domain([1, -1]); // add X axis line and the title on either end

  svg.append("g").attr("transform", "translate(" + marginTop + "," + outerHeight / 2 + ")").call(d3.axisBottom(xScale).ticks(0));
  svg.append("text").attr("text-anchor", "end").attr("x", innerWidth + marginLeft + 100).attr("y", outerHeight / 2 + 5).text("capitalism");
  svg.append("text").attr("text-anchor", "start").attr("x", marginLeft - 100).attr("y", outerHeight / 2 + 5).text("socialism"); // add Y axis line and the title on either end

  svg.append("g").attr("transform", "translate(" + outerWidth / 2 + "," + marginTop + ")").call(d3.axisLeft(yScale).ticks(0));
  svg.append("text").attr("text-anchor", "end").attr("x", outerWidth / 2 + 55).attr("y", marginTop - 15).text("individualism");
  svg.append("text").attr("text-anchor", "start").attr("x", outerWidth / 2 - 45).attr("y", innerHeight + marginTop + 25).text("collectivism"); //add legend

  svg.append("circle").attr("cx", 680).attr("cy", 690).attr("r", 7.5).style("fill", "blue");
  svg.append("text").attr("x", 690).attr("y", 690).text("Democrat").style("font-size", "15px").attr("alignment-baseline", "middle");
  svg.append("circle").attr("cx", 680).attr("cy", 720).attr("r", 7.5).style("fill", "red");
  svg.append("text").attr("x", 690).attr("y", 720).text("Republican").style("font-size", "15px").attr("alignment-baseline", "middle");
  svg.append("circle").attr("cx", 680).attr("cy", 750).attr("r", 7.5).style("fill", "gray");
  svg.append("text").attr("x", 690).attr("y", 750).text("Independent").style("font-size", "15px").attr("alignment-baseline", "middle"); // add axis circle

  svg.append("circle").attr("cx", outerWidth / 2).attr("cy", outerHeight / 2).attr("r", innerWidth / 2).attr("stroke", "black").attr("fill", "none"); // add circles to the G tag

  Object(_points__WEBPACK_IMPORTED_MODULE_0__["renderCircles"])(g, data, xScale, yScale);
  Object(_slider__WEBPACK_IMPORTED_MODULE_1__["renderSlider"])();
  Object(_button__WEBPACK_IMPORTED_MODULE_2__["playButton"])();
  Object(_button__WEBPACK_IMPORTED_MODULE_2__["resetButton"])();
  update(g, xScale, yScale, currentTerm, currentTermDataset);
};

function update(g, xScale, yScale, currentTerm, currentTermDataset) {
  // debugger
  document.getElementById("term-slider").addEventListener("input", function (e) {
    // debugger
    var sliderLabel = document.getElementById("slider-current-term");
    currentTerm = Number(e.target.value) || currentTerm;
    currentTermDataset = [];
    congressData.forEach(function (el) {
      if (el.congress === currentTerm) currentTermDataset.push(el);
    });
    var start = 1787;
    sliderLabel.innerHTML = currentTerm + "th Congress (" + (start + currentTerm * 2) + " - " + (start + currentTerm * 2 + 2) + ")";
    Object(_points__WEBPACK_IMPORTED_MODULE_0__["renderCircles"])(g, currentTermDataset, xScale, yScale);
  });
}

/***/ }),

/***/ "./src/points.js":
/*!***********************!*\
  !*** ./src/points.js ***!
  \***********************/
/*! exports provided: renderCircles, hoverInfo, clickInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCircles", function() { return renderCircles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverInfo", function() { return hoverInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickInfo", function() { return clickInfo; });
var renderCircles = function renderCircles(g, data, xScale, yScale) {
  g.selectAll(".pls").remove();
  var circles = g.selectAll("circle").data(data);
  var info = d3.select(".info").append("div").attr("class", "more-info").style("opacity", 0);
  circles.enter().append("circle").attr("class", "pls").attr("cursor", "cell").attr("r", 5).attr("cx", function (d) {
    return xScale(d.nominate_dim1);
  }).attr("cy", function (d) {
    return yScale(d.nominate_dim2);
  }).attr("fill", function (d) {
    if (d.party_code === 200) return "red";else if (d.party_code === 100) return "blue";else return "gray";
  }).on('mouseover', function (d, i) {
    d3.select(this).transition().duration('50').attr('r', 12);
    info.transition().duration(100).style("opacity", 1);
    info.html(hoverInfo(d)).style("left", d3.event.pageX + 10 + "px").style("top", d3.event.pageY - 15 + "px");
  }).on('mouseout', function (d, i) {
    d3.select(this).transition().duration('50').attr('r', 5);
    info.transition().duration('200').style("opacity", 0);
  }).on("click", function (d, i) {
    d3.select(this).transition().duration('50').attr('r', 12);
    info.transition().duration(100).style("opacity", 1);
    info.html(clickInfo(d)).style("left", d3.event.pageX + 10 + "px").style("top", d3.event.pageY - 15 + "px");
  });
};
var hoverInfo = function hoverInfo(d) {
  return d.bioname;
};
var clickInfo = function clickInfo(d) {
  var y = new Date();
  var currentYear = y.getFullYear();
  var ageCalc = d.died || currentYear;
  var age = ageCalc - d.born;
  var party;

  if (d.party_code === 200) {
    party = "Republican";
  } else if (d.party_code === 100) {
    party = "Democrat";
  } else party = "Independent";

  var xStatus;
  if (d.nominate_dim1 >= -1 && d.nominate_dim1 < -0.8) xStatus = "Very Left";else if (d.nominate_dim1 >= -0.8 && d.nominate_dim1 < -0.4) xStatus = "Left";else if (d.nominate_dim1 >= -0.4 && d.nominate_dim1 < -0.1) xStatus = "Somewhat Left";else if (d.nominate_dim1 >= -0.1 && d.nominate_dim1 < 0.1) xStatus = "Centrist";else if (d.nominate_dim1 >= 0.1 && d.nominate_dim1 < 0.4) xStatus = "Somewhat Right";else if (d.nominate_dim1 >= 0.4 && d.nominate_dim1 < 0.8) xStatus = "Right";else if (d.nominate_dim1 >= 0.8 && d.nominate_dim1 <= 1) xStatus = "Very Right";
  var yStatus;
  if (d.nominate_dim2 >= -1 && d.nominate_dim2 < -0.8) yStatus = "Very Collectivist";else if (d.nominate_dim2 >= -0.8 && d.nominate_dim2 < -0.4) yStatus = "Collectivist";else if (d.nominate_dim2 >= -0.4 && d.nominate_dim2 < -0.1) yStatus = "Somewhat Collectivist";else if (d.nominate_dim2 >= -0.1 && d.nominate_dim2 < 0.1) yStatus = "Centrist";else if (d.nominate_dim2 >= 0.1 && d.nominate_dim2 < 0.4) yStatus = "Somewhat Individualist";else if (d.nominate_dim2 >= 0.4 && d.nominate_dim2 < 0.8) yStatus = "Individualist";else if (d.nominate_dim2 >= 0.8 && d.nominate_dim2 <= 1) yStatus = "Very Individualist";
  return "".concat(d.bioname, " \n    <br> Born: ").concat(d.born, " \n    <br> Died: ").concat(d.died, " \n    <br> Age: ").concat(age, " \n    <br> Party: ").concat(party, " \n    <br> State: ").concat(d.state_abbrev, " \n    <br> Chamber: ").concat(d.chamber, " \n    <br> Votes: ").concat(d.nominate_number_of_votes, "\n    <br> Economics: ").concat(xStatus, "\n    <br> Social: ").concat(yStatus);
};

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: renderSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSlider", function() { return renderSlider; });
var renderSlider = function renderSlider() {
  var slider = document.createElement("div");
  slider.setAttribute("id", "slider-container");
  var sliderInput = document.createElement("input");
  sliderInput.setAttribute("id", "term-slider");
  sliderInput.setAttribute("type", "range");
  sliderInput.setAttribute("min", "80");
  sliderInput.setAttribute("max", "116");
  sliderInput.setAttribute("value", "80");
  sliderInput.setAttribute("step", "1");
  var sliderLabel = document.createElement("span");
  sliderLabel.setAttribute("id", "slider-current-term");
  sliderLabel.innerHTML = 80 + "th Congress (" + 1947 + " - " + 1949 + ")";
  ;
  slider.appendChild(sliderInput);
  slider.appendChild(sliderLabel);
  document.getElementsByClassName("slidertest")[0].appendChild(slider);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map