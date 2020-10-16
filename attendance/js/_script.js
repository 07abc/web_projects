let text_area = document.getElementById("raw_text")
let button = document.getElementById("btn")
let output = document.getElementById("output")

let temp
let process = () => {
    output.value = ""
    //console.log(text_area.value.match(/\d{9}|\d{7}/g).sort().toString())
    temp = text_area.value.match(/\d{9}|\d{7}/g).sort();
    for(let element of temp) {
        output.value += element + "\n";
    }
}

button.addEventListener("click", process)

// console.log(text_area)
// console.log(button)
// console.log(output)