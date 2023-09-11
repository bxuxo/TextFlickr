let input = document.getElementById("textInput");

input.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        input.setAttribute("hidden", true);

        let output = document.getElementById("textOutput");
        output.innerHTML = input.value;

        setInterval(( ) => {
            let curCol = output.style.color;
            let targetCol = curCol == "white" ? "red" : "white";
            let targetCol2 = targetCol == "white" ? "red" : "white";

            output.style.color = targetCol;
            document.body.style.backgroundColor = targetCol2;
        }, 10);
    }
}); 