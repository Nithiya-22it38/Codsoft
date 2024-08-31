function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid Input");
        document.getElementById("display").value = "";
    }
}
