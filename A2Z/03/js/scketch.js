let textField;
let output;
let submit;

function setup(){
    noCanvas();
    textField = select('#txt');
    output = select('#output');
    submit = select('#submit');
    submit.mousePressed(newText);
}

function newText(){
    let s = textField.value();
    let words = split(s, ' ');

    for(i= 0; i < words.length; i++){
        createP(words[i]);
    }
    let newText = s.substring(s.length/2, s.length);
    createP(newText); 

}
