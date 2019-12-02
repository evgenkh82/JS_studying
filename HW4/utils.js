/**
* Этот метод просто печатает на страницу html,
* в текстовую область <textarea id="output" ...
*/
function print(line) {
    let textArea = document.getElementById("output");
    textArea.append(line + "\n");
}