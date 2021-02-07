const heading = document.getElementById("heading");
const minuteField = document.getElementById("minute-field");
const response = document.getElementById("response");

function getAnswer(minutes) {
    let wordCount = minutes * 120;
    response.innerText = `so I should write around ${wordCount} words`;
    return wordCount;
}

minuteField.addEventListener("change", () => {
    getAnswer(minuteField.value);
})