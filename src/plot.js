
import {renderCircles} from './points'
import {renderSlider} from './slider'
import {playButton, resetButton, pauseButton} from './button'

export const render = (value) => {

    //Congressional term and members
    let currentTermDataset = [];
    let currentTerm = value || 80;

    congressData.forEach(el => {
        if(el.congress === currentTerm) currentTermDataset.push(el)
    })

    let data = currentTermDataset
    // Scatter plot properties

    const marginLeft = 100
    const marginRight = 100
    const marginTop = 100
    const marginBottom = 100

    const outerWidth = 800
    const outerHeight = 800

    const innerWidth = outerWidth - marginLeft - marginRight
    const innerHeight = outerHeight - marginTop - marginLeft

    //Create SVG and assign width and height

    const svg = d3.select("#scatter").append("svg")
        .attr("width", outerWidth)
        .attr("height", outerHeight);

    // actual plot will live within SVG as a g element 
        
    const g = svg.append("g")
        .attr("id", "actual-plot")
        .attr("transform", "translate(" + marginLeft + "," + marginTop + ")")

    // Create Scales for X and Y

    const xScale = d3.scaleLinear()
        .domain([-1,0,1])
        .range([0,innerWidth/2, innerWidth])
    const yScale = d3.scaleLinear()
        .range([0,innerHeight])
        .domain([1,-1])

    // add X axis line and the title on either end

    svg
        .append("g")
        .attr("transform", "translate(" + marginTop + "," +  outerHeight / 2 + ")")
        .call(d3.axisBottom(xScale).ticks(0));

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", innerWidth + marginLeft + 100)
        .attr("y", outerHeight/2 + 5)
        .text("capitalism");

    svg.append("text")
        .attr("text-anchor", "start")
        .attr("x", marginLeft - 100)
        .attr("y", outerHeight/2 + 5)
        .text("socialism");

    // add Y axis line and the title on either end

    svg
        .append("g")
        .attr("transform", "translate(" + outerWidth/2 + "," + marginTop + ")")
        .call(d3.axisLeft(yScale).ticks(0))

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", outerWidth/2 + 55)
        .attr("y", marginTop - 15)
        .text("individualism");

    svg.append("text")
        .attr("text-anchor", "start")
        .attr("x", outerWidth / 2 - 45)
        .attr("y", innerHeight + marginTop + 25)
        .text("collectivism");

    //add legend

    svg.append("circle").attr("cx", 680).attr("cy", 690).attr("r", 7.5).style("fill", "blue")
    svg.append("text").attr("x", 690).attr("y", 690).text("Democrat").style("font-size", "15px").attr("alignment-baseline", "middle")
    svg.append("circle").attr("cx", 680).attr("cy", 720).attr("r", 7.5).style("fill", "red")
    svg.append("text").attr("x", 690).attr("y", 720).text("Republican").style("font-size", "15px").attr("alignment-baseline", "middle")
    svg.append("circle").attr("cx", 680).attr("cy", 750).attr("r", 7.5).style("fill", "gray")
    svg.append("text").attr("x", 690).attr("y", 750).text("Independent").style("font-size", "15px").attr("alignment-baseline", "middle")

    // add axis circle

    svg.append("circle")
        .attr("cx", outerWidth/2)
        .attr("cy", outerHeight/2)
        .attr("r", innerWidth/2)
        .attr("stroke", "black")
        .attr("fill", "none")

    // add circles to the G tag

    renderCircles(g, data, xScale, yScale)

    renderSlider()

    playButton()

    resetButton()
    
    update(g, xScale, yScale, currentTerm, currentTermDataset)
    
}

function update(g, xScale, yScale, currentTerm, currentTermDataset){
    // debugger
    document.getElementById("term-slider")
        .addEventListener("input", e => {
            // debugger
            const sliderLabel = document.getElementById("slider-current-term")
            currentTerm = Number(e.target.value) || currentTerm;
            currentTermDataset = []
            congressData.forEach(el => { if(el.congress === currentTerm) currentTermDataset.push(el)})
            let start = 1787
            sliderLabel.innerHTML = currentTerm + "th Congress (" + (start+currentTerm*2) + " - " + (start + currentTerm*2 + 2) + ")";
            renderCircles(g, currentTermDataset, xScale, yScale)
        })
}

