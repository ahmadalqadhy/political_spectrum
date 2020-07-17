export const renderDetails = () => {
    const purpose = document.createElement("h2");
    purpose.setAttribute("class", "title-message");
    purpose.innerHTML = "Background & Purpose";

    const purposeBody = document.createElement("div")
    purposeBody.setAttribute("class", "body-message")
    purposeBody.innerHTML = `Every year, it seems that our country and politcs 
    become more and more divided. Heated rhetoric is often times used not to discuss
    tangible issues in society but rather to fire up an official's constinuents.
    Unfortunately rhetoric tends to evolve into policy and idealogy that influences
    how Congressmembers introduce and vote on bills. The purpose
    of this graph is to present an unbiased evolution of division that Congress has
    come to adopt since the 80th congress of 1947.`

    const interpretation = document.createElement("h2");
    interpretation.setAttribute("class", "title-message");
    interpretation.innerHTML = "Calculation & Interpretation";

    const interpretationBody = document.createElement("div")
    interpretationBody.setAttribute("class", "body-message")
    interpretationBody.innerHTML = `Every point on this graph represents a member of Congress.
    Each Congress Member is assigned 2 values (x, y) ranging between -1 and 1 which represent 
    a mix of ideology and voting history. The horizontal (x) axis denotes traditional socioeconmic 
    policy, often times refered to as "economic left" and "economic right". The vertical axis
    represents social issues and stances independent of economics. The (x, y) values for each
    Congress Member were computed using the NOMINATE scale system which analyzes voting history,
    courtesy of UCLA's Politcal Science Department. The slider can be used to change the Congressional term.
    Hovering over a point on the graph will show the Congress Member's name, and clicking on the
    point will reveal more information about the member`

    document.getElementsByClassName("message")[0].appendChild(purpose);
    document.getElementsByClassName("message")[0].appendChild(purposeBody);
    document.getElementsByClassName("message")[0].appendChild(interpretation);
    document.getElementsByClassName("message")[0].appendChild(interpretationBody);
}