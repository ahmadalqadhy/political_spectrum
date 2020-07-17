export const renderCircles = (g, data, xScale, yScale) => {

    g.selectAll(".pls").remove()

    let circles = g.selectAll("circle").data(data)

    const info = d3.select(".info").append("div")
        .attr("class", "more-info")
        .style("opacity", 0)

    circles.enter().append("circle")
        .attr("class", "pls")
        .attr("cursor", "cell")
        .attr("r", 5)
        .attr("cx", function (d) { return xScale(d.nominate_dim1) })
        .attr("cy", function (d) { return yScale(d.nominate_dim2) })
        .attr("fill", function (d) {
            if (d.party_code === 200) return "red";
            else if (d.party_code === 100) return "blue";
            else return "gray"
        })
        .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('r', 12);
            info.transition()
                .duration(100)
                .style("opacity", 1)
            info.html(hoverInfo(d))
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px")
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('r', 5);
            info.transition()
                .duration('200')
                .style("opacity", 0)
        })
        .on("click", function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('r', 12)
            info.transition()
                .duration(100)
                .style("opacity", 1)
            info.html(clickInfo(d))
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px")
        })

}

export const hoverInfo = (d) => {
    return d.bioname
}

export const clickInfo = (d) => {
    let y = new Date()
    let currentYear = y.getFullYear()
    let ageCalc = d.died || currentYear
    let age = ageCalc - d.born

    let party
    if (d.party_code === 200) {
        party = "Republican"
    } else if (d.party_code === 100) {
        party = "Democrat"
    } else party = "Independent"

    let xStatus
    if (d.nominate_dim1 >= -1 && d.nominate_dim1 < -0.8) xStatus = "Very Left"
    else if (d.nominate_dim1 >= -0.8 && d.nominate_dim1 < -0.4) xStatus = "Left"
    else if (d.nominate_dim1 >= -0.4 && d.nominate_dim1 < -0.1) xStatus = "Somewhat Left"
    else if (d.nominate_dim1 >= -0.1 && d.nominate_dim1 < 0.1) xStatus = "Centrist"
    else if (d.nominate_dim1 >= 0.1 && d.nominate_dim1 < 0.4) xStatus = "Somewhat Right"
    else if (d.nominate_dim1 >= 0.4 && d.nominate_dim1 < 0.8) xStatus = "Right"
    else if (d.nominate_dim1 >= 0.8 && d.nominate_dim1 <= 1) xStatus = "Very Right"

    let yStatus
    if (d.nominate_dim2 >= -1 && d.nominate_dim2 < -0.8) yStatus = "Very Collectivist"
    else if (d.nominate_dim2 >= -0.8 && d.nominate_dim2 < -0.4) yStatus = "Collectivist"
    else if (d.nominate_dim2 >= -0.4 && d.nominate_dim2 < -0.1) yStatus = "Somewhat Collectivist"
    else if (d.nominate_dim2 >= -0.1 && d.nominate_dim2 < 0.1) yStatus = "Centrist"
    else if (d.nominate_dim2 >= 0.1 && d.nominate_dim2 < 0.4) yStatus = "Somewhat Individualist"
    else if (d.nominate_dim2 >= 0.4 && d.nominate_dim2 < 0.8) yStatus = "Individualist"
    else if (d.nominate_dim2 >= 0.8 && d.nominate_dim2 <= 1) yStatus = "Very Individualist"

    return `${d.bioname} 
    <br> Born: ${d.born} 
    <br> Died: ${d.died} 
    <br> Age: ${age} 
    <br> Party: ${party} 
    <br> State: ${d.state_abbrev} 
    <br> Chamber: ${d.chamber} 
    <br> Votes: ${d.nominate_number_of_votes}
    <br> Economics: ${xStatus}
    <br> Social: ${yStatus}`
}