let inputio;
let output;

function setup(){
    noCanvas();
    inputio = createInput();

    inputio.changed(newText);
    inputio.input(newTyping);
    output = select('#output');
}

function newTyping(){
    output.html(inputio.value());
    
}
function newText(){
    createP(inputio.value());
}